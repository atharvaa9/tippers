import React from 'react'
import styled from 'styled-components'
import { images } from '../utils/images'

const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
  color: #ffffff;
  min-height: 100vh;
  background: #0b0b0e;
  position: relative;
  z-index: 1;
`   

const Header = styled.header`
  text-align: center;
`

const ProductTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 10px;
  background: linear-gradient(120deg, #ff6b6b, #a36bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ProductSubtitle = styled.p`
  font-size: 1.2rem;
  color: #8a8a8a;
  max-width: 600px;
  margin: 0 auto;
`

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 0 auto 60px;
  max-width: 1200px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const ProductImage = styled.img`
  width: 100%;
  scale: 0.7;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(163, 107, 255, 0.15);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #cecece;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 60px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #a36bff;
`

const Button = styled.button`
  background: linear-gradient(120deg, #ff6b6b, #a36bff);
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`

const SpecItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #cecece;
  
  &:before {
    content: "✓";
    color: #a36bff;
    margin-right: 10px;
    font-weight: bold;
  }
`

const PriceTag = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin: 20px 0;
  
  span {
    font-size: 1rem;
    color: #8a8a8a;
    margin-left: 8px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`

const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid #a36bff;
  color: #a36bff;
  
  &:hover {
    background: rgba(163, 107, 255, 0.1);
  }
`

export default function ProductPage() {
  return (
    <PageWrapper>
      <Header>
        <ProductTitle>Quantum Edge Pro</ProductTitle>
        <ProductSubtitle>
          The next generation of quantum computing at your fingertips
        </ProductSubtitle>
      </Header>

      <MainContent>
        <ProductInfo>
          <Description>
            Experience unprecedented computing power with the Quantum Edge Pro. 
            Our revolutionary quantum processor delivers exceptional performance 
            while maintaining energy efficiency and reliability.
          </Description>
          
          <SpecList>
            <SpecItem>Quantum Processing Unit: 128 Qubits</SpecItem>
            <SpecItem>Error Correction Rate: 99.99%</SpecItem>
            <SpecItem>Operating Temperature: -273.14°C</SpecItem>
            <SpecItem>Cloud Integration Ready</SpecItem>
          </SpecList>

          <PriceTag>
            $9,999 <span>/ unit</span>
          </PriceTag>

          <ButtonGroup>
            <Button>Pre-order Now</Button>
            <SecondaryButton>Technical Specs</SecondaryButton>
          </ButtonGroup>
        </ProductInfo>

        <ProductImage 
          src={images.QuantumEdgePro}
          alt="Quantum Edge Pro Device"
        />
      </MainContent>

      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>⚡</FeatureIcon>
          <h3>Lightning Fast</h3>
          <p>Process complex calculations in milliseconds</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🔒</FeatureIcon>
          <h3>Quantum Security</h3>
          <p>Advanced encryption for ultimate data protection</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🌐</FeatureIcon>
          <h3>Cloud Integration</h3>
          <p>Seamless connection with quantum cloud services</p>
        </FeatureCard>
      </FeaturesGrid>

      <Footer>
        <p>Contact us: dev.atharavparte@gmail.com</p>
        <p>© 2024 Quantum Edge Pro. All rights reserved.</p>
      </Footer>
    </PageWrapper>
  )
}
