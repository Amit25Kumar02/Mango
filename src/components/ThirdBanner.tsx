import {motion} from "framer-motion"
const ThirdBanner = ({data}) =>{
    return <section className="relative container mx-auto px-4 sm:px-4 lg:px-32 py-16">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-6"  style={{ lineHeight: 1.15 }} >{data.title}</h2>
      <p className="text-md text-black max-w-4xl mx-auto">
       {data.description}
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`grid grid-cols-1 md:grid-cols-${data.items.length == 6 ? "3" : data.items.length >= 4 ? "3" : data.items.length} lg:grid-cols-${data.items.length == 6 ? "4" : data.items.length >= 4 ? "4": data.items.length} gap-4`}
    >
      {data.items.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className=" rounded-xl p-6 border border-primary/30 hover:border-primary/80 transition-colors duration-300 group cursor-pointer bg-[#21253F] hover:bg-[#21253F]"
        >
          <div className={`w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4`}>
            <service.icon className="w-6 h-6 text-gradient-primary" />
          </div>
          <h3 className="text-lg font-bold text-gradient-primary mb-3">{service.title}</h3>
          <p className="text-white text-sm mb-4 leading-relaxed">{service.description}</p>
          
        </motion.div>
      ))}
    </motion.div>
  </section>
}
export default ThirdBanner;