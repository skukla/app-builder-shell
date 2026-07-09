# App Builder Shell — build me with AI

This is a deliberately minimal Adobe App Builder app, attached to a Demo Builder
project as a starting point. It deploys one placeholder web action
(`actions/hello/index.js`) so the deploy pipeline is proven green before any real
work starts. Everything else is yours (or your AI assistant's) to build.

## The intended workflow

1. **Clarify the integration goal with the user.** Example: "connect Adobe
   Commerce to Adobe Firefly Services to generate product imagery." Pin down the
   trigger (webhook? storefront call? schedule?), the data in, and the result out.
2. **Secure API access BEFORE writing code that calls an Adobe API.** A new
   action that calls Firefly (or any Adobe service) fails at runtime unless that
   API is subscribed on this project's Developer Console workspace credential:
   - If the `demo-builder` MCP server exposes `list_console_apis` /
     `add_console_apis`, use them: list the org's services, confirm the match
     with the user, then add the service codes. They handle org context and
     persistence for you.
   - Otherwise, direct the user to add the API in the Adobe Developer Console
     (Project → Workspace → Add API) and continue once it appears.
3. **Build with the Commerce Extensibility Developer Agent tooling.** The
   `commerce-extensibility` MCP server (installed by Demo Builder alongside this
   app) provides App Builder-aware tools — `aio-app-dev`, `aio-app-deploy`,
   `search-commerce-docs`, and more — plus skills for architecture,
   implementation, and testing. Prefer them over guessing App Builder patterns.
4. **Add actions under `actions/<name>/index.js`** and register each in
   `app.config.yaml` under `runtimeManifest.packages.app-builder-shell.actions`.
   Keep `require-adobe-auth: true` for actions that must only be called by
   signed-in Adobe users; the placeholder uses `false` because it is public
   hello-world output.
5. **Deploy** with `aio app deploy` (or the Developer Agent's deploy tool), from
   this directory. Demo Builder targets the right org/project/workspace when it
   deploys this component; from a terminal, `aio where` shows the current
   context.
6. **Verify** the deployed action URL (`aio app get-url`) before telling the
   user it works.

## Rules

- **No secrets in this repo.** It may be public. Runtime credentials live in
  `.env` (gitignored); user-specific values belong in Demo Builder settings.
- **Small actions, clear names.** One action per job; share code via `utils/`.
- **Don't remove the `hello` action until a real action replaces it** — the
  Demo Builder dashboard treats a deploy with zero actions as broken.

## Layout

```
app-builder-shell/
├── app.config.yaml        # Runtime manifest — register every action here
├── actions/
│   └── hello/index.js     # Placeholder web action (replace me)
├── AGENTS.md              # This file
└── CLAUDE.md              # Pointer here for Claude Code
```
