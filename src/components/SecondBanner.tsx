import { motion } from "framer-motion"
const SecondBanner = ({ data }) => {
  return <section className="mx-auto px-4 sm:px-4 lg:px-8 py-16 z-9999" style={{
    background: '#21253F',
  }}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6" style={{ lineHeight: 1.15 }} >{data.title}</h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >

        {data.items.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2 }}
            className="flex items-start space-x-4"
          >
            {/* <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-900 font-bold text-lg">{step.number}</span>
            </div> */}
            <div>
              <h3 className="text-xl font-bold text-gradient-primary mb-2">{step.title}</h3>
              <p className="text-white text-[14px] md:text-lg leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {data.framework && <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="rounded-2xl p-8 border border-white/40"
      >
        <h3 className="text-2xl font-bold text-gradient-primary mb-8">{data.framework.title}</h3>

        <div className="space-y-6 mb-8">
          {[
            ...data.framework.items
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{item.title}</span>
                <span className="text-white">{item.text ?? `${item.percentage}%`}</span>
              </div>
              <div className="w-full bg-stone-300 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Stats Section */}
        {data.framework.stats && (
          <div className="flex justify-around text-center border-t border-white/20 pt-6">
            <div>
              <p
                className={`text-2xl font-bold ${data.framework.stats.timeline.color || "text-cyan-400"
                  }`}
              >
                {data.framework.stats.timeline.value}
              </p>
              <p className="text-sm text-gray-300">
                {data.framework.stats.timeline.label}
              </p>
            </div>
            <div>
              <p
                className={`text-2xl font-bold ${data.framework.stats.roi.color || "text-green-400"
                  }`}
              >
                {data.framework.stats.roi.value}
              </p>
              <p className="text-sm text-gray-300">
                {data.framework.stats.roi.label}
              </p>
            </div>
          </div>
        )}

        {/* <div className="flex flex-row justify-evenly">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-primary">18 Months</div>
            <div className="text-white">Avg Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-primary">340%</div>
            <div className="text-white">ROI Achievement</div>
          </div>
        </div> */}
      </motion.div>}
    </div>
  </section>
}
export default SecondBanner