"use server";
import { google } from "googleapis";

const spreadsheetId = "13YbJYJgqDbe9xDfaGUo5HbKX1SQ5ez7fxWY7miyu5zI";

const credentials = {
  type: "service_account",
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY,
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
};

async function getService() {
  const auth = await google.auth.getClient({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const service = google.sheets({ version: "v4", auth });
  return service;
}

export async function getSheetData() {
  const data = await service.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: "A:A",
  });

  return { data: data.data.values };
}

export async function createData(value) {
  const service = await getService();
  try {
    await service.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      valueInputOption: "RAW",
      range: "A1",
      requestBody: {
        values: [[value, value, value]],
      },
    });
    return "Success";
  } catch (error) {
    console.log(error);
  }
}

export async function createBrands(values) {
  const service = await getService();
  const {
    name,
    email,
    phoneNumber,
    companyName,
    companySize,
    otherindustriesString,
    industries,
    monthlyInfluencerBudget,
  } = values;

  try {
    await service.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      valueInputOption: "RAW",
      range: "Brands!A2",
      requestBody: {
        values: [
          [
            name,
            email,
            phoneNumber,
            companyName,
            companySize,
            industries.toString(),
            otherindustriesString,
            monthlyInfluencerBudget,
          ],
        ],
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createCreators(values) {
  const service = await getService();
  const {
    name,
    email,
    phoneNumber,
    companyName,
    companySize,
    otherindustriesString,
    industries,
    monthlyInfluencerBudget,
  } = values;

  try {
    await service.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      valueInputOption: "RAW",
      range: "Creators!A2",
      requestBody: {
        values: [[...Object.values(values)]],
      },
    });
  } catch (error) {
    console.log(error);
  }
}
