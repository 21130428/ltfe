// export const formatPrice = (price) => {
//     return new Intl.NumberFormat('vi-VN', {
//         style: 'currency',
//         currency: "VNĐ"
//     }).format(price);
// }

export const formatPrice = (price) => {
    // Use the Vietnamese locale for formatting
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        // Optional formatting options (adjust as needed)
        // minimumFractionDigits: 0, // Display no decimal places by default
        // maximumFractionDigits: 2 // Allow up to 2 decimal places (optional)
    }).format(price);
};