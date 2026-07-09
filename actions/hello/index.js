/**
 * Placeholder action so the shell deploys green on day one.
 *
 * Replace or extend this — the whole point of the shell is that you (or your
 * AI assistant) build the real integration here. See AGENTS.md at the repo
 * root for the intended workflow.
 */
async function main(params) {
    return {
        statusCode: 200,
        body: {
            message:
                'Hello from your App Builder shell. Open this project in Claude Code ' +
                'and describe the integration you want to build — see AGENTS.md.',
        },
    };
}

exports.main = main;
