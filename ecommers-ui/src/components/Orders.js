import React, { useState, useEffect } from "react";
import ApiService, { ApiUrls } from "../services/ApiService";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await ApiService.get(ApiUrls.GetOrders);
    setOrders(response.data);
  };

  return (
    // <Container maxWidth="lg" style={{ marginTop: "20px" }}>
    //   <Typography variant="h4" gutterBottom>
    //     Orders Overview
    //   </Typography>
    //   <TableContainer component={Paper}>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Order ID</TableCell>
    //           <TableCell>Order Date</TableCell>
    //           <TableCell>Total</TableCell>
    //           <TableCell>User</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {orders.map((order) => (
    //           <React.Fragment key={order.order_id}>
    //             <TableRow>
    //               <TableCell>{order.order_id}</TableCell>
    //               <TableCell>
    //                 {new Date(order.order_date).toLocaleString()}
    //               </TableCell>
    //               <TableCell>${order.total}</TableCell>
    //               <TableCell>
    //                 {order.user.username} ({order.user.email})
    //               </TableCell>
    //             </TableRow>
    //             <TableRow>
    //               <TableCell colSpan={4}>
    //                 <Accordion>
    //                   <AccordionSummary>
    //                     <Typography>Order Items</Typography>
    //                   </AccordionSummary>
    //                   <AccordionDetails>
    //                     <Table>
    //                       <TableHead>
    //                         <TableRow>
    //                           <TableCell>Product Name</TableCell>
    //                           <TableCell>Description</TableCell>
    //                           <TableCell>Price</TableCell>
    //                           <TableCell>Quantity</TableCell>
    //                         </TableRow>
    //                       </TableHead>
    //                       <TableBody>
    //                         {order.orderItems.map((item) => (
    //                           <TableRow key={item.order_item_id}>
    //                             <TableCell>
    //                               {item.product.product_name}
    //                             </TableCell>
    //                             <TableCell>
    //                               {item.product.description}
    //                             </TableCell>
    //                             <TableCell>${item.product.price}</TableCell>
    //                             <TableCell>{item.quantity}</TableCell>
    //                           </TableRow>
    //                         ))}
    //                       </TableBody>
    //                     </Table>
    //                   </AccordionDetails>
    //                 </Accordion>
    //               </TableCell>
    //             </TableRow>
    //           </React.Fragment>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Container>
    <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: 40, color: "primary.main", mr: 1 }} />
        <Typography variant="h4" component="h1" color="primary">
          Orders Overview
        </Typography>
      </Box>

      <TableContainer component={Paper} elevation={6} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Order ID
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Order Date
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Total
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                User
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <React.Fragment key={order.order_id}>
                {/* Main Order Row */}
                <TableRow hover>
                  <TableCell>
                    <Chip label={`#${order.order_id}`} color="secondary" />
                  </TableCell>
                  <TableCell>
                    {new Date(order.order_date).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="success.main">
                      ${order.total}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <PersonIcon sx={{ color: "info.main", mr: 1 }} />
                      <Typography variant="body2">
                        {order.user.username}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Expandable Row */}
                <TableRow>
                  <TableCell colSpan={4}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">
                          Order Items ({order.orderItems.length})
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Divider sx={{ mb: 2 }} />
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Product Name</TableCell>
                              <TableCell>Description</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Quantity</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {order.orderItems.map((item) => (
                              <TableRow key={item.order_item_id}>
                                <TableCell>
                                  <Typography variant="body2" color="primary">
                                    {item.product.product_name}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  {item.product.description}
                                </TableCell>
                                <TableCell>${item.product.price}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Orders;
