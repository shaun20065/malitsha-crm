import express from 'express';
import { setQuotationsRoutes } from './routes/quotations';
import { setInvoicesRoutes } from './routes/invoices';
import { json } from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

setQuotationsRoutes(app);
setInvoicesRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});