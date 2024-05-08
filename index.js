const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `version` input defined in action metadata file
    const version = core.getInput('version');
    console.log(`Checking version: ${version}!`);
    const regexp = "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$"
    if (!new RegExp(regexp).test(version)) {
        core.setFailed("Invalid version");
    } else {
        console.log("Version is valid");
    }

} catch (error) {
    core.setFailed(error.message);
}
