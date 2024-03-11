import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-1939204849680264-103112-0cb2adda3d4f6afbe595fdc911ba0c11-1087998956' });

const preference = new Preference(client);

function createPreference(req, res) {
    preference.create({
      body: {
        items: [
          {
            title: 'Mi producto',
            quantity: 1,
            unit_price: 2000
          }
        ],
      }
    })
    .then(el => {
        console.log(el)
    })
    .catch(console.log);
}

export { createPreference }