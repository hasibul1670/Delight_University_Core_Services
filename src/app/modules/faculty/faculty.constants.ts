export const facultyFilterableFields: string[] = [
    'searchTerm',
    'facultyId',
    'email',
    'contactNo',
    'gender',
    'bloodGroup',
    'gender',
    'designation',
    'academicFacultyId',
    'academicDepartmentId'
];

export const facultySearchableFields: string[] = [
    'firstName',
    'lastName',
    'middlename',
    'email',
    'designation'
];

export const facultyRelationalFields: string[] = ['academicFacultyId', 'academicDepartmentId'];
export const facultyRelationalFieldsMapper: { [key: string]: string } = {
    academicFacultyId: 'academicFaculty',
    academicDepartmentId: 'academicDepartment'
};