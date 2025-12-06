import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-6">
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900"
            >
                {t('corporate.about.title', 'Hakkımızda')}
            </motion.h1>
            <div className="prose prose-lg max-w-none text-gray-600">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {t('corporate.about.p1', 'Sivas Iron Metal, küresel çelik ve demir ithalat/ihracat endüstrisinde önde gelen bir lider olarak durmaktadır. Onlarca yıllık deneyimimiz ve kaliteye olan sarsılmaz bağlılığımızla, dünya çapında birinci sınıf metal ürünleri arayan işletmeler için güvenilir bir ortak olarak kendimizi kanıtladık.')}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {t('corporate.about.p2', 'Şirketimiz, çeşitli endüstriyel ihtiyaçları karşılamak için yüksek kaliteli çelik ve demir malzemelerin tedariki, işlenmesi ve dağıtımı konusunda uzmanlaşmıştır. Tesislerimizden çıkan her ürünün uluslararası spesifikasyonları karşılamasını veya aşmasını sağlayarak en yüksek kalite kontrol standartlarını sürdürmekten gurur duyuyoruz.')}
                </motion.p>
                <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuArHJoG_V5UfHek4swoTS82wZ71jgHR9NfTJS1mXKJu20QWHe-U7T9FyJrB9OW5Ms10bc66LWOevTIumyc92hyvv3cC9ZG8WmDrPYgoWE-Q1bh_cI0gKcsU9-cUpYPfm-XcBeJ2Imbl38VEly2SEoKaFHXEY2bqFLiHG9bdZW7UexQ5jKduSvxpuxaA0CPxt84JGrt8sCOIpFs-KjIMV7KCzpIgpDfwABrGkgvLpXInd_DJYhRi_JIYUMR4jMv-vuJmP0WDj499wnh-"
                        alt="Factory"
                        className="h-64 w-full rounded-xl object-cover shadow-lg"
                    />
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq_86frdrI26XLYX78P09ftSeB_GZAS4VszbCrioWgpzYDdVE_CQole3O5cMYw6W5uMM71CopOcbgdIacd4Jz1Ot_S_A6frY5NmZwDfu8jDGe57hAdY__M9pC3Agtv7MoqymMxPvJ6k7tPpNTIeCyGMki6KtPz8erTW2_onJiFY4Be7HkkeCSe_R9KDC4xkPVjamCKHrAUIBr9Mk_RIaZcl_ApLzLy8MtRZUvUL0RsoDcqicFDsAzEmaleViA1Mq-5BpiwIpChvg_p"
                        alt="Steel Production"
                        className="h-64 w-full rounded-xl object-cover shadow-lg"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {t('corporate.about.p3', 'Sivas Iron Metal olarak, günümüzün küresel ekonomisinde güvenilir tedarik zincirlerinin ve tutarlı kalitenin çok önemli olduğunu anlıyoruz. Bu nedenle, kıtalar genelinde tedarikçiler ve müşterilerle güçlü ilişkiler kurarak, sorunsuz uluslararası ticareti sağlayan sağlam bir ağ oluşturduk.')}
                </motion.p>
            </div>
        </div>
    );
}
