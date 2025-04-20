import React, { useState } from 'react';
import { FaUsers, FaBook, FaMedal, FaChevronRight, FaCalendarAlt, FaClock } from 'react-icons/fa';
import * as S from './style';
// import { useHistory } from 'react-router-dom';

interface TestimonialType {
    name: string;
    role: string;
    text: string;
}

interface CourseInfoType {
    title: string;
    description: string;
    duration: string;
    schedule: string;
}

interface StatType {
    value: string;
    label: string;
}

const LandingPage: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
    // const history = useHistory(); // Initialize the history function

    // Function to handle the registration button click
    // const handleRegistration = () => {
    // history.push('/login');
    // };

    const testimonials: TestimonialType[] = [
        {
            name: "Alisher Davronov",
            role: "Ota-ona",
            text: "Mening farzandim Algoritmik Maktabda o'qiganidan so'ng dasturlashga bo'lgan qiziqishi sezilarli darajada oshdi. O'qituvchilar juda malakali va g'amxo'r."
        },
        {
            name: "Nodira Karimova",
            role: "O'quvchi",
            text: "Men bu yerda 2 yildan beri tahsil olaman. Amaliy mashg'ulotlar va zamonaviy dasturlash tillari bo'yicha o'quv dasturlari juda foydali."
        },
        {
            name: "Temur Rahimov",
            role: "Bitiruvchi",
            text: "Algoritmik Maktabda olgan bilimlarim tufayli men nufuzli IT kompaniyada ish topa oldim. O'qituvchilar haqiqiy mutaxassislar!"
        }
    ];

    const courseInfo: CourseInfoType[] = [
        {
            title: "Python dasturlash",
            description: "Boshlang'ich darajadan professional darajagacha",
            duration: "3 oy",
            schedule: "Haftada 3 kun"
        },
        {
            title: "Web dasturlash",
            description: "HTML, CSS, JavaScript va React",
            duration: "4 oy",
            schedule: "Haftada 4 kun"
        },
        {
            title: "Algoritmlar va ma'lumotlar strukturasi",
            description: "Yuqori samarali kod yozish",
            duration: "2 oy",
            schedule: "Haftada 2 kun"
        }
    ];

    const stats: StatType[] = [
        { value: "300+", label: "O'quvchilar" },
        { value: "25+", label: "Tajribali o'qituvchilar" },
        { value: "15+", label: "Kurslar" },
        { value: "90%", label: "Bitiruvchilar ish topish darajasi" }
    ];

    return (
        <div>
            {/* Hero Section */}
            <S.HeroSection>
                <S.Container>
                    <S.FlexContainer>
                        <S.HalfWidth>
                            <S.Title>Algoritmik Maktab</S.Title>
                            <S.SubTitle>
                                Zamonaviy texnologiyalar va dasturlash sohasida yuqori sifatli ta'lim
                            </S.SubTitle>
                            <S.Description>
                                300 dan ortiq o'quvchilar va tajribali o'qituvchilar bilan IT sohasida kelajagingizni yarating
                            </S.Description>
                            <S.ButtonContainer>
                                <a href="/login">
                                    <S.PrimaryButton >
                                        Ro'yxatdan o'tish
                                    </S.PrimaryButton>
                                </a>
                                <S.SecondaryButton>
                                    Batafsil ma'lumot
                                </S.SecondaryButton>
                            </S.ButtonContainer>
                        </S.HalfWidth>
                        <S.HalfWidth>
                            <S.ImageContainer>
                                <S.Image src="logo.jpg" alt="Algoritmik Maktab o'quvchilari" />
                            </S.ImageContainer>
                        </S.HalfWidth>
                    </S.FlexContainer>
                </S.Container>
            </S.HeroSection>

            {/* Stats Section */}
            <S.StatsSection>
                <S.Container>
                    <S.StatsGrid>
                        {stats.map((stat, index) => (
                            <S.StatBox key={index}>
                                <S.StatValue>{stat.value}</S.StatValue>
                                <S.StatLabel>{stat.label}</S.StatLabel>
                            </S.StatBox>
                        ))}
                    </S.StatsGrid>
                </S.Container>
            </S.StatsSection>

            {/* About Section */}
            <S.AboutSection>
                <S.Container>
                    <S.TextCenter>
                        <S.SectionTitle>Biz haqimizda</S.SectionTitle>
                        <S.SectionDescription>
                            Algoritmik Maktab 2018 yilda tashkil etilgan bo'lib, zamonaviy dasturlash va IT sohasida sifatli ta'lim berish maqsadida faoliyat olib boradi
                        </S.SectionDescription>
                    </S.TextCenter>

                    <S.FeatureGrid>
                        <S.FeatureCard>
                            <S.IconContainer>
                                <FaUsers size={32} color="#2563eb" />
                            </S.IconContainer>
                            <S.FeatureTitle>Tajribali o'qituvchilar</S.FeatureTitle>
                            <S.FeatureDescription>
                                Barcha o'qituvchilarimiz kamida 5 yillik tajribaga ega bo'lgan, yetakchi IT kompaniyalarda ishlagan mutaxassislar
                            </S.FeatureDescription>
                        </S.FeatureCard>

                        <S.FeatureCard>
                            <S.IconContainer>
                                <FaBook size={32} color="#2563eb" />
                            </S.IconContainer>
                            <S.FeatureTitle>Zamonaviy dastur</S.FeatureTitle>
                            <S.FeatureDescription>
                                O'quv dasturimiz muntazam yangilanib turadi va hozirgi bozor talablariga mos keladi
                            </S.FeatureDescription>
                        </S.FeatureCard>

                        <S.FeatureCard>
                            <S.IconContainer>
                                <FaMedal size={32} color="#2563eb" />
                            </S.IconContainer>
                            <S.FeatureTitle>Ish bilan ta'minlash</S.FeatureTitle>
                            <S.FeatureDescription>
                                Bitiruvchilarimizning 90% dan ortig'i 3 oy ichida IT sohasida o'z ishini topadi
                            </S.FeatureDescription>
                        </S.FeatureCard>
                    </S.FeatureGrid>
                </S.Container>
            </S.AboutSection>

            {/* Courses Section */}
            <S.CoursesSection>
                <S.Container>
                    <S.TextCenter>
                        <S.SectionTitle>Bizning kurslar</S.SectionTitle>
                        <S.SectionDescription>
                            Har qanday darajadagi o'quvchilar uchun mo'ljallangan kurslar
                        </S.SectionDescription>
                    </S.TextCenter>

                    <S.CourseGrid>
                        {courseInfo.map((course, index) => (
                            <S.CourseCard key={index}>
                                <S.CourseImage src={`/api/placeholder/${400 + index}/${200 + index}`} alt={course.title} />
                                <S.CourseContent>
                                    <S.CourseTitle>{course.title}</S.CourseTitle>
                                    <S.CourseDescription>{course.description}</S.CourseDescription>
                                    <S.CourseDetail>
                                        <FaCalendarAlt size={18} color="#2563eb" />
                                        <S.CourseDetailText>{course.duration}</S.CourseDetailText>
                                    </S.CourseDetail>
                                    <S.CourseDetail>
                                        <FaClock size={18} color="#2563eb" />
                                        <S.CourseDetailText>{course.schedule}</S.CourseDetailText>
                                    </S.CourseDetail>
                                    <S.CourseButton>
                                        Batafsil <FaChevronRight size={16} style={{ marginLeft: '0.25rem' }} />
                                    </S.CourseButton>
                                </S.CourseContent>
                            </S.CourseCard>
                        ))}
                    </S.CourseGrid>

                    <S.CenteredButton>
                        <S.PrimaryButton style={{ backgroundColor: '#2563eb', color: 'white' }}>
                            Barcha kurslarni ko'rish
                        </S.PrimaryButton>
                    </S.CenteredButton>
                </S.Container>
            </S.CoursesSection>

            {/* Testimonials Section */}
            <S.TestimonialsSection>
                <S.Container>
                    <S.TextCenter>
                        <S.SectionTitle>O'quvchilarimiz fikrlari</S.SectionTitle>
                        <S.SectionDescription>
                            Maktabimiz bitiruvchilarining tajribalari va fikrlari
                        </S.SectionDescription>
                    </S.TextCenter>

                    <S.TestimonialContainer>
                        <S.TestimonialCard>
                            <S.TestimonialText>"{testimonials[activeTestimonial].text}"</S.TestimonialText>
                            <S.TestimonialAuthor>
                                <S.AuthorAvatar>
                                    <S.AuthorInitial>{testimonials[activeTestimonial].name.charAt(0)}</S.AuthorInitial>
                                </S.AuthorAvatar>
                                <S.AuthorInfo>
                                    <S.AuthorName>{testimonials[activeTestimonial].name}</S.AuthorName>
                                    <S.AuthorRole>{testimonials[activeTestimonial].role}</S.AuthorRole>
                                </S.AuthorInfo>
                            </S.TestimonialAuthor>
                        </S.TestimonialCard>

                        <S.TestimonialDots>
                            {testimonials.map((_, index) => (
                                <S.TestimonialDot
                                    key={index}
                                    active={activeTestimonial === index}
                                    onClick={() => setActiveTestimonial(index)}
                                    aria-label={`Testimonial ${index + 1}`}
                                />
                            ))}
                        </S.TestimonialDots>
                    </S.TestimonialContainer>
                </S.Container>
            </S.TestimonialsSection>

            {/* CTA Section */}
            <S.CTASection>
                <S.Container>
                    <S.CTATitle>Kelajagingizni biz bilan boshlang</S.CTATitle>
                    <S.CTADescription>
                        Zamonaviy dasturlash ko'nikmalarini o'rganish va IT sohasida muvaffaqiyatli karyera qurish uchun bugun bizga qo'shiling
                    </S.CTADescription>
                    <a href="/login">
                        <S.CTAButton>
                            Hozir ro'yxatdan o'ting
                        </S.CTAButton>
                    </a>
                </S.Container>
            </S.CTASection>
        </div>
    );
};

export default LandingPage;