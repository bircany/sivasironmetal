import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function History() {
    const { t } = useTranslation();

    const milestones = [
        {
            year: "1998",
            title: t('corporate.history.1998.title', 'Kuruluş'),
            description: t('corporate.history.1998.desc', 'Sivas Demir Metal, Sivas\'ta küçük bir atölye olarak kuruldu ve yerel pazara hizmet vermeye başladı.')
        },
        {
            year: "2005",
            title: t('corporate.history.2005.title', 'İlk İhracat'),
            description: t('corporate.history.2005.desc', 'Şirket, komşu ülkelere ilk ihracatını gerçekleştirerek uluslararası pazara adım attı.')
        },
        {
            year: "2010",
            title: t('corporate.history.2010.title', 'Fabrika Genişlemesi'),
            description: t('corporate.history.2010.desc', 'Üretim kapasitesini artırmak için yeni ve modern bir fabrika tesisine geçiş yapıldı.')
        },
        {
            year: "2018",
            title: t('corporate.history.2018.title', 'Teknoloji Yatırımı'),
            description: t('corporate.history.2018.desc', 'Üretim hattına son teknoloji otomasyon sistemleri entegre edilerek verimlilik artırıldı.')
        },
        {
            year: "2023",
            title: t('corporate.history.2023.title', 'Global Marka'),
            description: t('corporate.history.2023.desc', '40\'tan fazla ülkeye ihracat yapan global bir marka haline gelindi.')
        }
    ];

    return (
        <div className="flex flex-col gap-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="mb-8 text-3xl font-bold text-gray-900">{t('corporate.history.title', 'Tarihçemiz')}</h1>
                
                <div className="relative border-l-4 border-primary/20 ml-4 space-y-12">
                    {milestones.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8"
                        >
                            <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm"></span>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                <span className="text-2xl font-black text-primary">{item.year}</span>
                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed max-w-2xl">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
