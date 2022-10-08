const rows = [
    {
        employeeId: 8473,
        name: 'Bob Henderson',
        dept: 'Human Resources',
        email: 'bhenderson@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '10/12/2016'
    },
    {
        employeeId: 4856,
        name: 'Lakshmi Patel',
        dept: 'Marketing',
        email: 'lpatel@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '09/04/2016'
    },
    {
        employeeId: 2562,
        name: 'Cathy Simoyan',
        dept: 'Engineering',
        email: 'csimoyan@abc-corp.com',
        employmentStatus: 'Contractor',
        hireDate: '05/25/2014'
    },
    {
        employeeId: 2563,
        name: 'Mike Zhang',
        dept: 'Engineering',
        email: 'mzhang@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '02/04/2015'
    },
    {
        employeeId: 1945,
        name: 'Kai Vongvilay',
        dept: 'Human Resources',
        email: 'kvongvilay@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '10/14/2016'
    },
    {
        employeeId: 2518,
        name: 'Dennis Smith',
        dept: 'Engineering',
        email: 'dsmith@abc-corp.com',
        employmentStatus: 'Contractor',
        hireDate: '12/03/2015'
    },
    {
        employeeId: 7455,
        name: 'Dennis Reynolds',
        dept: 'Design',
        email: 'dreynolds@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '02/05/2015'
    },
    {
        employeeId: 1345,
        name: 'Alice Richardson',
        dept: 'Engineering',
        email: 'arichardson@abc-corp.com',
        employmentStatus: 'Contractor',
        hireDate: '01/12/2013'
    },
    {
        employeeId: 9685,
        name: 'Oleg Stefanski',
        dept: 'QA',
        email: 'ostefanski@abc-corp.com',
        employmentStatus: 'Contractor',
        hireDate: '12/03/2015'
    },
    {
        employeeId: 8575,
        name: 'Stan Liebowitz',
        dept: 'Marketing',
        email: 'sliebowitz@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '07/13/2016'
    },
    {
        employeeId: 5524,
        name: 'Linda Powers',
        dept: 'Engineering',
        email: 'lpowers@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '05/05/2014'
    },
    {
        employeeId: 6653,
        name: 'Linda Snell',
        dept: 'Engineering',
        email: 'lsnell@abc-corp.com',
        employmentStatus: 'Contractor',
        hireDate: '11/03/2018'
    },
    {
        employeeId: 8577,
        name: 'Brenda Suther',
        dept: 'Human Resources',
        email: 'bsuther@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '12/03/2012'
    },
    {
        employeeId: 4166,
        name: "Jim O'Connor",
        dept: 'Design',
        email: 'joconnor@abc-corp.com',
        employmentStatus: 'Contractor',
        hireDate: '11/11/2016'
    },
    {
        employeeId: 3265,
        name: 'Miguel González',
        dept: 'QA',
        email: 'mgonazalez@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '08/18/2016'
    },
    {
        employeeId: 8741,
        name: 'Abdel Abboud',
        dept: 'Engineering',
        email: 'aabboud@abc-corp.com',
        employmentStatus: 'Contractor',
        hireDate: '10/06/2016'
    },
    {
        employeeId: 1456,
        name: 'Zheng Shui',
        dept: 'Design',
        email: 'zshui@abc-corp.com',
        employmentStatus: 'Full-time',
        hireDate: '07/08/2016'
    }
]

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min)

export const rowsWithExtra = rows.map((row) => ({
    ...row,
    employeeIQ: getRandom(90, 120),
    salary: getRandom(80000, 160000),
    prizes: getRandom(0, 16),
    legacyGroup: getRandom(0, 2) === 1 ? 'IMS Health' : 'Quintiles'
}))

export default rows
