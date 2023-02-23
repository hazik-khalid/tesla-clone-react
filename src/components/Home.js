import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section 
      title="Modal-S"
      description="Order Online For Touchless Delivery"
      leftbuttontext="CUSTOM ORDER"
      rightbuttontext="EXISTING INVENTORY"  
      backgroundimg="model-s.jpg"  
      />
      <Section 
      title="Modal-Y"
      description="Order Online For Touchless Delivery"
      leftbuttontext="CUSTOM ORDER"
      rightbuttontext="EXISTING INVENTORY"  
      backgroundimg="model-y.jpg"  
      />
      <Section 
      title="Modal-3"
      description="Order Online For Touchless Delivery"
      leftbuttontext="CUSTOM ORDER"
      rightbuttontext="EXISTING INVENTORY"  
      backgroundimg="model-3.jpg"  
      />
      <Section 
      title="Modal-X"
      description="Order Online For Touchless Delivery"
      leftbuttontext="CUSTOM ORDER"
      rightbuttontext="EXISTING INVENTORY"  
      backgroundimg="model-x.jpg"  
      />
      <Section 
      title="Lowest Cost Solar Panels In America"
      description="Money-Back gaurantee"
      leftbuttontext="Order now"
      rightbuttontext="Learn More"  
      backgroundimg="solar-panel.jpg"  
      />
      <Section 
      title="Solar for new Roofs"
      description="Money-Back gaurantee"
      leftbuttontext="Order now"
      rightbuttontext="Learn More"  
      backgroundimg="solar-roof.jpg"  
      />
      <Section 
      title="Accessories"
      leftbuttontext="Shop now" 
      backgroundimg="accessories.jpg"  
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
