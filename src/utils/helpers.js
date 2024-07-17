export const formatPrice = (price) => {
    // Use the Vietnamese locale for formatting
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(price);
};