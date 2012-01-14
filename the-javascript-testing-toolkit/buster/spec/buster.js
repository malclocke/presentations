var config = module.exports;

config["My tests"] = {
    environment: "browser",        // or "node"
    sources: [
        "../../adder.js", // Paths are relative to config file
        // "../lib/**/*.js"   // Glob patterns supported
    ],
    tests: [
        "../*-spec.js"
    ]
}
