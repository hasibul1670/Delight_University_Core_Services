### Delight University Core Services

## ER Diagram

<img src="https://i.ibb.co/bgRjbws/umDM.png" alt="ER Diagram"></img>



# Delight University Core Services

This repository contains the core services for Delight University. It includes the database schema and models for managing academic semesters, faculties, departments, students, and more.

## Entities

### AcademicSemester

  - id (Primary Key)
  - year
  - title
  - code
  - startMonth
  - endMonth
  - createdAt
  - updatedAt
  - students

### AcademicFaculty

  - id (Primary Key)
  - title
  - createdAt
  - updatedAt
  - academicDepartments
  - students
  - faculties

### AcademicDepartment

  - id (Primary Key)
  - title
  - createdAt
  - updatedAt
  - academicFaculty
  - students
  - faculties

### Student

  - id (Primary Key)
  - studentId
  - firstName
  - lastName
  - middlename
  - profileImage
  - email
  - contactNo
  - gender
  - bloodGroup
  - academicSemester
  - academicDepartment
  - academicFaculty
  - createdAt
  - updatedAt

### Faculty

  - id (Primary Key)
  - facultyId
  - firstName
  - lastName
  - middlename
  - profileImage
  - email
  - contactNo
  - gender
  - bloodGroup
  - designation
  - academicDepartment
  - academicFaculty
  - createdAt
  - updatedAt

## Features

  - User authentication and authorization
  - Interactive learning materials
  - Discussion forums
  - Assignments and assessments
  - Progress tracking
  - Notifications and announcements

## Technologies Used

  - Backend: Node.js, Express.js, TypeScript
  - Database: PostgreSQL
  - Deployment: Vercel
  - Authentication: JWT
  - Packages Used: bcrypt, http-errors, http-status-codes, zod


## Features

  - User authentication and authorization
  - Course Create,Update,Delete,Read
  - Interactive learning materials
  - Discussion forums
  - Assignments and assessments
  - Progress tracking
  - Notifications and announcements


 #### If you have any questions, feel free to reach out to us:

  - Email: hasibulislam1670@gmail.com
  - GitHub: https://github.com/hasibul1670
