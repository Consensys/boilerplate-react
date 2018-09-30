import getRuntimeEnvVar from "../getRuntimeEnvVar";

const testVarKey = "test";
const envValue = "env";
const runtimeEnvValue = "runtimeEnv";

describe("getRuntimeEnvVar", () => {
    afterEach(() => {
        delete process.env[testVarKey];
        if (window.runtimeEnv) {
            delete window.runtimeEnv[testVarKey];
        }
    });

    it("should return undefined by default", () => {
        expect(getRuntimeEnvVar(testVarKey) === undefined);
    });

    it("should return a process env var if set", () => {
        process.env[testVarKey] = envValue;
        expect(getRuntimeEnvVar(testVarKey) === envValue);
    });

    it("should return a runtime env var if set", () => {
        window.runtimeEnv = {};
        window.runtimeEnv[testVarKey] = runtimeEnvValue;
        expect(getRuntimeEnvVar(testVarKey) === runtimeEnvValue);
    });

    it("should return env var over runtimeEnv if both are set", () => {
        window.runtimeEnv = {};
        window.runtimeEnv[testVarKey] = runtimeEnvValue;
        process.env[testVarKey] = envValue;
        expect(runtimeEnvValue !== envValue);
        expect(getRuntimeEnvVar(testVarKey) === runtimeEnvValue);
    });
});
