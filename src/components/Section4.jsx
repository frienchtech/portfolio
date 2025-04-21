import React from "react";
import "../cssFiles/Section4.css";
import Box from "../smallComponents/Box";
function Section4() {
  return (
    <>
      <div className="section4">
        <h1>
          Our Successful <span>Projects</span>
        </h1>
        <div className="mainContainerSection4">
          <Box
            location="../app.png"
            name="App Generator"
            para="This service provides a user-friendly platform to generate custom mobile applications without the need for coding skills. Create apps for various purposes such as business, education, entertainment."
          />
          <Box
            location="../manager.png"
            name="My Manager"
            para="My Manager is a personal productivity tool that helps users organize their tasks, schedules, and projects efficiently. It offers features such as task lists, calendar"
          />
          <Box
            location="../scanner.png"
            name="Fast Scanner"
            para="This service utilizes advanced image recognition technology to convert images containing text into editable text format. It is useful for tasks such as extracting text ."
          />
          <Box
            location="../audiobook.png"
            name="Audio Book"
            para="The Self Help Audio Book service offers a vast collection of audio books covering various self-help topics such as personal development, motivation, mindfulness, and success strategies. Users can listen to."
          />
          <Box
            location="../pandit.png"
            name="Chalo Pandit Ji"
            para="Chalo Pandit Ji is the nation's largest aggregator of Pandit Ji's, offering personalized pooja services to devotees. Users can book appointments for various religious ceremonies, rituals, and special."
          />
          <Box
            location="../photocopy.png"
            name="Photo Copy"
            para="Photo Copy is a document scanning and printing service that allows users to make copies of physical documents quickly and conveniently. It offers high-quality scanning and printing solutions for both personal and professional use."
          />
          <Box
            location="../neuro.png"
            name="NeuroTherapy App"
            para="Our NeuroTherapy Management App is tailored for doctors, offering efficient tools to streamline patient care. Access patient records, treatment plans, and communicate seamlessly—all in one platform. Experience the convenience of managing ."
          />
          <Box
            location="../home.png"
            name="New Aashiyana"
            para="Explore your dream home with the new Aashiyana Website! Our comprehensive platform offers a wide range of properties for sale and rent, expert guidance from real estate professionals, and innovative tools to simplify your property search. Find your perfect abode today!"
          />
          <Box
            location="../iot.png"
            name="IOT Threats"
            para="IoT Threats is a service-based project focused on identifying and mitigating security risks in IoT (Internet of Things) environments. It provides real-time monitoring, threat detection, and protective measures to ensure the safety and reliability of IoT-based systems."
          />
          
         
          <Box
            location="../ecommerce.png"
            name="HandMade Hub"
            para="Handmade Hub is an eCommerce website designed for showcasing and selling handcrafted products. It offers a clean and intuitive shopping experience, allowing users to explore unique handmade items with ease."
          />
        </div>
      </div>
    </>
  );
}

export default Section4;
