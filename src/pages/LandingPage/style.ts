import styled from 'styled-components';

// Hero Section Styles
export const HeroSection = styled.section`
  background-color: #2563eb;
  color: white;
  padding: 4rem 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HalfWidth = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PrimaryButton = styled.button`
  background-color: white;
  color: #2563eb;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6f0ff;
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  border: 2px solid white;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ImageContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.25rem;
`;

// Stats Section Styles
export const StatsSection = styled.section`
  padding: 3rem 0;
  background-color: white;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatBox = styled.div`
  padding: 1.5rem;
  background-color: #eff6ff;
  border-radius: 0.5rem;
  text-align: center;
`;

export const StatValue = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.p`
  color: #4b5563;
`;

// About Section Styles
export const AboutSection = styled.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`;

export const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const SectionDescription = styled.p`
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
`;

export const FeatureGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #eff6ff;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const FeatureDescription = styled.p`
  color: #4b5563;
`;

// Courses Section Styles
export const CoursesSection = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

export const CourseGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CourseCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

export const CourseContent = styled.div`
  padding: 1.5rem;
`;

export const CourseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const CourseDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const CourseDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const CourseDetailText = styled.span`
  color: #4b5563;
  margin-left: 0.5rem;
`;

export const CourseButton = styled.button`
  display: flex;
  align-items: center;
  color: #2563eb;
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: #1d4ed8;
  }
`;

export const CenteredButton = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

// Testimonials Section Styles
export const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`;

export const TestimonialContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

export const TestimonialCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const TestimonialText = styled.p`
  color: #4b5563;
  font-style: italic;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #eff6ff;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

export const AuthorInitial = styled.span`
  font-weight: 700;
  color: #2563eb;
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.h4`
  font-weight: 700;
`;

export const AuthorRole = styled.p`
  color: #4b5563;
`;

export const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const TestimonialDot = styled.button<{ active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  margin: 0 0.25rem;
  background-color: ${props => (props.active ? '#2563eb' : '#d1d5db')};
`;

// CTA Section Styles
export const CTASection = styled.section`
  padding: 4rem 0;
  background-color: #2563eb;
  color: white;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const CTADescription = styled.p`
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto 2rem;
`;

export const CTAButton = styled.button`
  background-color: white;
  color: #2563eb;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6f0ff;
  }
`;
