import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function VisionMission() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="mb-6 text-3xl font-bold text-gray-900">{t('corporate.vision.title', 'Vizyonumuz')}</h1>
                <div className="rounded-xl bg-gray-50 p-8 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xl font-medium text-gray-800 italic">
                        "{t('corporate.vision.desc', 'Sektörde kalite ve hizmet mükemmelliği için yeni ölçütler belirleyerek, sürekli yenilik yaparak ve küresel erişimimizi genişleterek uluslararası metal ticaretinin geleceğini şekillendirmek.')}"
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h1 className="mb-6 text-3xl font-bold text-gray-900">{t('corporate.mission.title', 'Misyonumuz')}</h1>
                <div className="rounded-xl bg-gray-50 p-8 border-l-4 border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xl font-medium text-gray-800 italic">
                        "{t('corporate.mission.desc', 'Olağanüstü kalitede ürünler sunarak, en yüksek müşteri hizmeti standartlarını koruyarak ve güven ve güvenilirliğe dayalı kalıcı ortaklıklar kurarak çelik ve demir ticaretinde küresel lider olmak.')}"
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
