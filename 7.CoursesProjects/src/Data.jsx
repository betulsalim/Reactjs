import Java from './assets/java.jpg'
import CSharp from './assets/cSharp.jpeg'
import React from './assets/reactjs.jpg'
import './css/Data.css'

export const courses = [
  {
    id: 1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    description: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    instructor: "Maximilian Schwarzmüller",
    price: 500,
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    image : React,
  },
  {
    id: 2,
    title: "Learn C# Full-Stack: .Net Core 3.1, Entity Framework Core & Angular 9",
    description: "Learn to code in C# and build full-stack web apps with .NET Core, Entity Framework Core and Angular. Create a real e-commerce project from start to finish",
    instructor: "Neil Cummings",
    price: 400,
    link: "https://www.udemy.com/course/learn-csharp-full-stack/",
    image: CSharp,
  },
  {
    id: 3,
    title: "The Complete Java Course 2021: From Zero to Expert!",
    description: "Learn Java from scratch and become Java Software Engineer: Basics, OOP, Interview questions, Git, Java Collections etc",
    instructor: "Tim Buchalka",
    price: 300,
    link: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
    image: Java,
  }
]
