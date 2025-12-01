import { useTranslation } from 'react-i18next';

export default function GenericCorporate({ type }: { type: 'quality' | 'history' }) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-900">{t(`corporate.${type}.title`)}</h1>
            <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                    {t(`corporate.${type}.content`)}
                </p>
            </div>
        </div>
    );
}
