export function formatPrice(price: string): string {
  // Convert price to number and format as Kenyan Shillings
  const numPrice = parseFloat(price);
  
  // Format with commas for thousands
  const formattedPrice = numPrice.toLocaleString('en-KE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return `KES ${formattedPrice}`;
}