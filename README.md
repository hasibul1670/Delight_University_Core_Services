### Product Management Microservices Server

## ER Diagram

<img src="https://i.ibb.co/DVrc9fy/finallllll-drawio-1-drawio-1.png" alt="ER Diagram"></img>

#### Entities

- Product

  - product_id (Primary Key)
  - product_name,
  - description,
  - category_id (Foreign Key),
  - manufacturer_id (Foreign Key),
  - price,
  - creation_date,
  - last_updated

- Category
  - category_id (Primary Key),
  - category_name,
  - slug
- Manufacturer

  - manufacturer_id (Primary Key),
  - manufacturer_name,
  - address,
  - contact_no

- Inventory

  - inventory_id (Primary Key),
  - product_id (Foreign Key),
  - quantity,
  - location,

- Color

  - color_id (Primary Key),
  - color_name,
  - color_code,

- ProductColor

  - product_id (Primary Key, Foreign Key),
  - color_id (Foreign Key,Primary Key),

- ApparelSize

  - size_id (Primary Key),
  - name
  - code,

- Customer

  - customer_id (Primary Key),
  - first_name
  - last_name
  - email
  - address
  - contact_no

- Review
  - review_id (Primary Key),
  - product_id (Foreign Key),
  - customer_id (Foreign Key),
  - rating
  - review_text
  - review_date

## Features

- User authentication and authorization
- Course Create,Update,Delete,Read
- Interactive learning materials
- Discussion forums
- Assignments and assessments
- Progress tracking
- Notifications and announcements

## Technologies Used

- Backend: Node.js, Express.js,Typescript
- Database: PostgreSQL
- Deployment: Vercel
- Authentication: JWT
- Packages Used: bcrypt,http-errors,http-status-codes,zod

If you have any questions, feel free to reach out to us:

- Email: hasibulislam1670@gmail.com
- Website: https://client-summer-school.vercel.app/
- GitHub: https://github.com/hasibul1670

### Live Link(vercel): https://summer-camp-school-server-sigma.vercel.app

<!-- ### Application Routes:

#### student

- https://summer-camp-school-server-sigma.vercel.app/api/v1/students/create-students [POST]
- https://summer-camp-school-server-sigma.vercel.app/api/v1/students [get all users] (GET)
- https://summer-camp-school-server-sigma.vercel.app/api/v1/students/6497381fc9fbf4e29d55ee7f (get Single student) (GET)
- https://summer-camp-school-server-sigma.vercel.app/api/v1/students/6497381fc9fbf4e29d55ee7f (Update Single student) (PATCH)

#### instructor

- https://summer-camp-school-server-sigma.vercel.app/api/v1/instructors/create-Instructor [create an Instructor] [POST]
- https://summer-camp-school-server-sigma.vercel.app/api/v1/students/create-students [POST]
- https://summer-camp-school-server-sigma.vercel.app/api/v1/students/6497381fc9fbf4e29d55ee7f (get Single student) (GET)
- https://summer-camp-school-server-sigma.vercel.app/api/v1/students/6497381fc9fbf4e29d55ee7f (Update Single student) (PATCH)

#### courses

- https://summer-camp-school-server-sigma.vercel.app/api/v1/courses/create-courses [create a courses] (POST)
- https://summer-camp-school-server-sigma.vercel.app/api/v1/courses [get all courses] (GET)
- https://summer-camp-school-server-sigma.vercel.app/api/v1/courses/648ca42c17d2d4e64a734513 [create a single courses] (GET)
- https://summer-camp-school-server-sigma.vercel.app/api/v1/courses/648ca42c17d2d4e64a734513 [Update a single courses] (PATCH)
- https://summer-camp-school-server-sigma.vercel.app/api/v1/courses/648ca42c17d2d4e64a734513 [Delete a single courses] (DELETE)

#### Login

- https://summer-camp-school-server-sigma.vercel.app/api/v1/auth/login [Login] (POST)
- https://summer-camp-school-server-sigma.vercel.app/api/v1/auth/change-password (POST) -->
# Delight_University_Core_Services
