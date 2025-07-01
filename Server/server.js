import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

// 🔥 TOTO JE KLÚČOVÉ
app.use(cors());

app.use(express.json({ limit: '10mb' }));

// aby si vedel spracovať JSON
app.use(express.json());

app.post('/aukro-proxy', async (req, res) => {
    try {
        const aukroResponse = await fetch(
            'https://aukro.cz/backend-web/api/offers/searchItemsCommon?page=0&size=60&sort=',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Accept-Currency': 'EUR',
                },
                body: JSON.stringify(req.body),
            }
        );

        const data = await aukroResponse.json();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Proxy server error' });
    }
});

app.listen(4000, () => {
    console.log('✅ Proxy server running on http://localhost:4000');
});
