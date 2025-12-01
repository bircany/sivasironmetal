import { useTranslation } from 'react-i18next';

interface GenericPageProps {
    titleKey: string;
    contentKey: string;
}

export default function GenericPage({ titleKey, contentKey }: GenericPageProps) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-900">{t(titleKey)}</h1>
            <div className="prose max-w-none text-gray-600">
                <p>{t(contentKey)}</p>
            </div>
        </div>
    );
}
