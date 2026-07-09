# App Builder Shell

A minimal Adobe App Builder app used by [Adobe Demo Builder](https://github.com/skukla/demo-builder-vscode)
as the "blank shell" catalog integration: it deploys one placeholder web action so
the pipeline is green on day one, then the user builds the real integration with
AI assistance.

See [AGENTS.md](AGENTS.md) for the AI-first development workflow this shell is
designed around.

## Deploy

```bash
aio app deploy
```

Demo Builder attaches, deploys, and manages this app automatically when selected
from the Add-an-Integration catalog.
