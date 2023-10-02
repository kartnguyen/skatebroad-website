export async function loadData() {
  try {
    const res = await fetch(
      "https://651a276d340309952f0ce8ff.mockapi.io/skates"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function formattedPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
