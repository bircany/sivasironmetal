export interface Product {
    id: string;
    category: 'sheets' | 'pipes' | 'profiles' | 'construction';
    image: string;
    name: string;
    desc: string;
    features: string[];
}

export const products: Product[] = [
    {
        id: 'hr-sheets',
        category: 'sheets',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
        name: 'Hot Rolled Sheets',
        desc: 'High strength sheets used in general structural steels, pipe profile production, and machinery manufacturing.',
        features: ['High strength', 'Easy formability', 'Wide range of sizes']
    },
    {
        id: 'cr-sheets',
        category: 'sheets',
        image: 'https://images.unsplash.com/photo-1535191030484-0948c7414fef?auto=format&fit=crop&q=80',
        name: 'Cold Rolled Sheets',
        desc: 'Precision surface sheets preferred in automotive, white goods, and radiator production.',
        features: ['Smooth surface', 'Precise thickness tolerance', 'Superior paint adhesion']
    },
    {
        id: 'galvanized-pipes',
        category: 'pipes',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
        name: 'Galvanized Pipes',
        desc: 'Long-lasting pipes with high corrosion resistance used in water and gas installations.',
        features: ['Corrosion resistance', 'Long service life', 'Pressure resistant']
    },
    {
        id: 'box-profiles',
        category: 'profiles',
        image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2c?auto=format&fit=crop&q=80',
        name: 'Box Profiles',
        desc: 'Square and rectangular profiles used in steel construction structures, roof systems, and machine chassis.',
        features: ['High load capacity', 'Aesthetic appearance', 'Easy assembly']
    },
    {
        id: 'ipe-profiles',
        category: 'profiles',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80',
        name: 'IPE Profiles',
        desc: 'I-section profiles used in the load-bearing systems of industrial structures and multi-story buildings.',
        features: ['Optimum weight/strength ratio', 'Economical solution', 'Production according to standards']
    },
    {
        id: 'steel-mesh',
        category: 'construction',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
        name: 'Steel Mesh',
        desc: 'Reinforcement material used in reinforced concrete structures, field concretes, and tunnel formwork systems.',
        features: ['Time and labor saving', 'Homogeneous reinforcement distribution', 'High adherence']
    }
];

export const categories = [
    { id: 'sheets', label: 'Steel Sheets' },
    { id: 'pipes', label: 'Pipes Group' },
    { id: 'profiles', label: 'Profiles Group' },
    { id: 'construction', label: 'Construction Materials' },
];
