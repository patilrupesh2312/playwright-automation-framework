import 'dotenv/config';

function getRequiredVariable(variableName: string): string {
  const value = process.env[variableName];

  if (!value) {
    throw new Error(
      `Required environment variable "${variableName}" is missing.`,
    );
  }

  return value;
}

export const env = {
  uiBaseUrl: getRequiredVariable('UI_BASE_URL'),
  apiBaseUrl: getRequiredVariable('API_BASE_URL'),
  username: getRequiredVariable('UI_USERNAME'),
  password: getRequiredVariable('UI_PASSWORD'),
};