import axios from 'axios';

async function testFullCheckout() {
    try {
        console.log("1. Registering/Logging in test user...");
        const loginRes = await axios.post('http://localhost:4000/api/user/login', {
            email: "jaiswalaman1520@gmail.com",
            password: "user12345"
        }).catch(() => null);

        let token = loginRes?.data?.token;

        if (!token) {
            console.log("User not found, registering new user...");
            const regRes = await axios.post('http://localhost:4000/api/user/register', {
                name: "Aman Customer",
                email: "customer_test_" + Date.now() + "@gmail.com",
                password: "user12345"
            });
            token = regRes.data.token;
        }

        console.log("2. User Token obtained:", token.slice(0, 20) + "...");

        const customerTargetEmail = "rameshkumar.test9999@gmail.com";
        console.log(`3. Placing Order with Delivery Email: ${customerTargetEmail}...`);

        const placeOrderRes = await axios.post('http://localhost:4000/api/order/place', {
            items: [
                {
                    _id: "66d82d497c39050ba25bfb8a",
                    name: "Men Round Neck Pure Cotton T-shirt",
                    price: 150,
                    size: "M",
                    quantity: 1
                }
            ],
            amount: 155,
            paymentMethod: "COD",
            address: {
                firstName: "Ramesh",
                lastName: "Kumar",
                email: customerTargetEmail,
                street: "123 Main Street",
                city: "Gorakhpur",
                state: "UP",
                zipcode: "273001",
                country: "India",
                phone: "9876543210"
            }
        }, {
            headers: {
                token: token
            }
        });

        console.log("4. Order Response:", placeOrderRes.data);

    } catch (err) {
        console.error("❌ Full Checkout Test Failed:", err.response ? err.response.data : err.message);
    }
}

testFullCheckout();
