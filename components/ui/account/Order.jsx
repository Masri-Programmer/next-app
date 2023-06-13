import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './Account.css'
import { Button, styles } from '../../../imports'
import { Link } from 'react-router-dom'

const steps = [
    'Confirmed',
    'Picked up',
    'Out for delivery',
    'Completed',
];
const Order = () => {
    return (
        <div className='box d-grid gap-2'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <span><strong>You package is on its way</strong></span>
            <span>Arrival estimate: May 25</span>
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img src="./imgs/productImg.png" className="order-product-img" alt="product" />
                </div>
                <div class="flex-grow-1 ms-3 d-grid" style={{ fontSize: '14px' }}>
                    <span className='text-main'><strong>Adidas Shirt</strong></span>
                    <div className="d-flex">
                        <span><strong>Order ID</strong></span>
                        <div className="ms-auto">#54</div>
                    </div>
                    <div className="d-flex">
                        <span><strong>Placed on</strong></span>
                        <div className="ms-auto">18-05-2023  10:30</div>
                    </div>
                    <div className="d-flex">
                        <span><strong>Payment Type</strong></span>
                        <div className="ms-auto">Credit Card</div>
                    </div>
                </div>
            </div>
            <Link to={"/account/order-detials"}>
                <Button className={styles.roundedOrangeButton}>
                    More Info
                </Button></Link>
            <Button className={styles.outlineOrangeButton}>
                Cancel Order
            </Button>
        </div>
    )
}

export default Order