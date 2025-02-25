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
  gap: 20px;
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
  scale: 0.6;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(163, 107, 255, 0.15);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  will-change: transform;
  
  &:hover {
    transform: scale(1.05);
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(163, 107, 255, 0.1);
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(163, 107, 255, 0.2);
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
    box-shadow: 0 5px 15px rgba(163, 107, 255, 0.1);
  }
`

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 40px 0;
  
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  th {
    color: #a36bff;
    font-weight: bold;
  }
  
  td {
    color: #cecece;
  }
`

const TestimonialSection = styled.section`
  padding: 60px 0;
  text-align: center;
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 40px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  text-align: left;
  
  blockquote {
    font-style: italic;
    margin-bottom: 20px;
    color: #cecece;
  }
  
  .author {
    color: #a36bff;
    font-weight: bold;
  }
`

const FAQSection = styled.section`
  margin: 60px 0;
`

const FAQItem = styled.div`
  margin-bottom: 20px;
  
  h4 {
    color: #ffffff;
    margin-bottom: 10px;
    cursor: pointer;
    
    &:before {
      content: "Q: ";
      color: #a36bff;
    }
  }
  
  p {
    color: #cecece;
    margin-left: 20px;
    
    &:before {
      content: "A: ";
      color: #ff6b6b;
    }
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

      <TestimonialSection>
        <ProductTitle>What Our Clients Say</ProductTitle>
        <TestimonialGrid>
          <TestimonialCard>
            <blockquote>
              "The Quantum Edge Pro has revolutionized our research capabilities. 
              The processing power is unlike anything we've seen before."
            </blockquote>
            <p className="author">Dr. Sarah Chen, Quantum Research Institute</p>
          </TestimonialCard>
          <TestimonialCard>
            <blockquote>
              "Implementation was seamless, and the cloud integration 
              capabilities have transformed our development workflow."
            </blockquote>
            <p className="author">James Wilson, Tech Innovation Labs</p>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialSection>

      <ComparisonTable>
        <thead>
          <tr>
            <th>Features</th>
            <th>Quantum Edge Pro</th>
            <th>Competitors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Qubit Count</td>
            <td>128</td>
            <td>64</td>
          </tr>
          <tr>
            <td>Error Correction</td>
            <td>99.99%</td>
            <td>98.5%</td>
          </tr>
          <tr>
            <td>Cloud Integration</td>
            <td>Built-in</td>
            <td>Additional Setup Required</td>
          </tr>
        </tbody>
      </ComparisonTable>

      <FAQSection>
        <ProductTitle>Frequently Asked Questions</ProductTitle>
        <FAQItem>
          <h4>What makes Quantum Edge Pro different?</h4>
          <p>Our proprietary quantum architecture delivers twice the processing power 
             while maintaining industry-leading error correction rates.</p>
        </FAQItem>
        <FAQItem>
          <h4>How does the cloud integration work?</h4>
          <p>The Quantum Edge Pro comes with built-in APIs and SDKs that seamlessly 
             connect with major cloud providers and our quantum cloud services.</p>
        </FAQItem>
        <FAQItem>
          <h4>What support options are available?</h4>
          <p>We offer 24/7 technical support, comprehensive documentation, and 
             optional on-site installation services.</p>
        </FAQItem>
      </FAQSection>

      <Footer>
        <p>Contact us: dev.atharavparte@gmail.com</p>
        <p>© 2024 Quantum Edge Pro. All rights reserved.</p>
      </Footer>
    </PageWrapper>
  )
}
