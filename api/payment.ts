const headers = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.NOTION_API}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const options = { method: "POST", headers, next: { revalidate: 0 } };

export const fetchPaymentList = async (databases: string) => {
  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${databases}/query`,
      options
    );
    const resResult = await res.json();
    const { results } = resResult;

    const result = results.map((value: any) => {
      return {
        key: value.properties.key.rich_text[0].plain_text,
        name: value.properties.name.rich_text[0].plain_text,
      };
    });

    return result;
  } catch (e) {
    console.error("error : ", e);
  }
};
