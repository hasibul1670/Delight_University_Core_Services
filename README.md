## Delight University Core Services

Welcome to the Delight University Core Services repository! This repository serves as the foundation for managing various aspects of the university's academic operations. From maintaining academic semesters to enabling seamless communication among students and faculty, this repository houses essential functionalities. Below, you'll find an overview of the technologies used, key features, and more.

## ER Diagram

<img src="https://i.ibb.co/bgRjbws/umDM.png" alt="ER Diagram"></img>

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
- Database: PostgreSQL,Prisma ORM
- Deployment: Vercel
- Authentication: JWT
- Packages Used: bcrypt, http-errors, http-status-codes, zod

## Features

- User Auth & Authorization: Secure login, role-based access.
- Course Management: Faculty: create, update, delete, read courses.
- Interactive Materials: Upload presentations, docs, videos for learning.
- Discussion Forums: Engage in academic discussions.
- Assignments & Assessments: Submit and grade tasks.
- Progress Tracking: Monitor academic performance.
- Notifications: Stay updated on course news and deadlines.

#### If you have any questions, feel free to reach out to us:

- Email: hasibulislam1670@gmail.com
- GitHub: https://github.com/hasibul1670
