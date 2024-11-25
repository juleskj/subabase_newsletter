//henter url locals fra .env.local hvor at url og keyen er bliver diffineret
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//skal have nogle headers for at med en key for at få daten fra supabase
const headersList = {
  Accept: "*/*",
  "Content-Type": "application/json",
  apikey: key,
  Prefer: "return=representation",
};

//skal være en async functuon siden vi bruger await
export async function getSubs() {
  const response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

//ny funcktion hvor vi poster subs hvor den for noget data
export async function postSub(subdata) {
  const response = await fetch(url, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(subdata),
  });

  let data = await response.json();
  return data;
}
