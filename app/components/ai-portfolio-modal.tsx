"use client"

import { useState, useMemo } from "react"
import { X, Sparkles, TrendingUp, PieChart, ArrowRight } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function AiPortfolioModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedRisk, setSelectedRisk] = useState("moderate")
  const [isGenerating, setIsGenerating] = useState(false)
  const [step, setStep] = useState<'portfolio' | 'prediction'>('portfolio')
  const [investmentAmount, setInvestmentAmount] = useState(10000)
  const [investmentYears, setInvestmentYears] = useState(10)
  const [portfolio, setPortfolio] = useState<null | {
    stocks: Array<{
      symbol: string
      allocation: number
      performance: string
      description: string
    }>
    riskLevel: string
    expectedReturn: string
    volatility: string
    projectedReturns: Array<{
      year: number
      value: number
    }>
  }>(null)

  const generateProjectedReturns = (riskLevel: string, amount: number, years: number) => {
    const baseReturn = riskLevel === 'conservative' ? 0.06 : riskLevel === 'moderate' ? 0.10 : 0.14
    const currentYear = new Date().getFullYear()
    
    return Array.from({ length: years }, (_, i) => {
      const year = currentYear + i + 1
      const value = amount * Math.pow(1 + baseReturn, i + 1)
      return { year, value }
    })
  }

  const generatePortfolio = () => {
    setIsGenerating(true)
    // Simulating API call
    setTimeout(() => {
      const projectedReturns = generateProjectedReturns(selectedRisk, investmentAmount, investmentYears)
      setPortfolio({
        stocks: [
          { symbol: "AAPL", allocation: 25, performance: "+15.2%", description: "Technology leader with strong ecosystem" },
          { symbol: "MSFT", allocation: 20, performance: "+22.8%", description: "Cloud computing and software giant" },
          { symbol: "GOOGL", allocation: 15, performance: "+18.5%", description: "Digital advertising and AI innovation" },
          { symbol: "AMZN", allocation: 15, performance: "+12.4%", description: "E-commerce and cloud services leader" },
          { symbol: "NVDA", allocation: 25, performance: "+45.6%", description: "AI and graphics computing pioneer" },
        ],
        riskLevel: selectedRisk,
        expectedReturn: "18.2%",
        volatility: "Medium",
        projectedReturns,
      })
      setIsGenerating(false)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden">
      <div className="bg-[#0C0A09] border border-zinc-800 rounded-2xl w-full max-w-2xl mx-4 p-6 relative max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        <button onClick={onClose} className="absolute right-4 top-4 text-zinc-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="h-6 w-6 text-[#CBFF00]" />
          <h2 className="text-2xl font-medium">AI Portfolio Creator</h2>
        </div>

        {!portfolio ? (
          <>
            <p className="text-zinc-400 mb-8">
              Let our AI create a personalized stock portfolio based on your risk tolerance and market analysis.
            </p>

            <div className="mb-8">
              <label className="block text-sm text-zinc-300 mb-3">Select your risk tolerance:</label>
              <div className="grid grid-cols-3 gap-3">
                {["conservative", "moderate", "aggressive"].map((riskLevel) => (
                  <button
                    key={riskLevel}
                    onClick={() => setSelectedRisk(riskLevel)}
                    className={`p-3 rounded-lg border ${selectedRisk === riskLevel ? "border-[#CBFF00] bg-[#CBFF00]/10 text-[#CBFF00]" : "border-zinc-800 hover:border-zinc-700"} capitalize`}
                  >
                    {riskLevel}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generatePortfolio}
              disabled={isGenerating}
              className="w-full bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-full h-12 font-medium flex items-center justify-center"
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Generating Portfolio...</span>
                </div>
              ) : (
                <span>Generate AI Portfolio</span>
              )}
            </button>
          </>
        ) : (
          <div>
            {step === 'portfolio' ? (
              <>
                <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                  <div className="bg-zinc-900/50 rounded-lg p-3 flex-1 min-w-[160px]">
                    <div className="flex items-center space-x-2 text-[#CBFF00] mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-medium text-sm">Expected Return</span>
                    </div>
                    <div className="text-xl font-medium">{portfolio.expectedReturn}</div>
                  </div>
                  <div className="bg-zinc-900/50 rounded-lg p-3 flex-1 min-w-[160px]">
                    <div className="flex items-center space-x-2 text-[#CBFF00] mb-1">
                      <PieChart className="h-4 w-4" />
                      <span className="font-medium text-sm">Risk Level</span>
                    </div>
                    <div className="text-xl font-medium capitalize">{portfolio.riskLevel}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {portfolio.stocks.map((stock: any) => (
                    <div key={stock.symbol} className="bg-zinc-900/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium">{stock.symbol}</div>
                        <div className="text-[#CBFF00] text-sm">{stock.performance}</div>
                      </div>
                      <div className="text-xs text-zinc-400 mb-1 line-clamp-2">{stock.description}</div>
                      <div className="text-xs text-zinc-300">Allocation: {stock.allocation}%</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setStep('prediction')}
                  className="w-full bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-lg px-4 py-3 font-medium flex items-center justify-center space-x-2"
                >
                  <span>Predict Returns</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <label className="block text-sm text-zinc-300 mb-2">Investment Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-2 text-zinc-400">$</span>
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => {
                        const amount = Number(e.target.value)
                        setInvestmentAmount(amount)
                        setPortfolio(prev => prev ? {
                          ...prev,
                          projectedReturns: generateProjectedReturns(prev.riskLevel, amount, investmentYears)
                        } : null)
                      }}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2 text-white pl-8"
                      min="1000"
                      step="1000"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-zinc-300 mb-2">Investment Period (Years)</label>
                  <input
                    type="range"
                    value={investmentYears}
                    onChange={(e) => {
                      const years = Number(e.target.value)
                      setInvestmentYears(years)
                      setPortfolio(prev => prev ? {
                        ...prev,
                        projectedReturns: generateProjectedReturns(prev.riskLevel, investmentAmount, years)
                      } : null)
                    }}
                    className="w-full accent-[#CBFF00]"
                    min="1"
                    max="20"
                  />
                  <div className="text-sm text-zinc-400 mt-1">Until {new Date().getFullYear() + investmentYears}</div>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium mb-4">Projected Returns Over Time</h3>
                  <div className="h-[240px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={portfolio.projectedReturns}
                        margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#CBFF00" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#CBFF00" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis
                          dataKey="year"
                          stroke="#666"
                          tickFormatter={(value) => `${value}`}
                          ticks={portfolio.projectedReturns.filter((_, i) => i % Math.ceil(investmentYears / 5) === 0).map(d => d.year)}
                        />
                        <YAxis
                          stroke="#666"
                          tickFormatter={(value) => `$${Math.round(value).toLocaleString()}`}
                        />
                        <Tooltip
                          formatter={(value) => [`$${Math.round(Number(value)).toLocaleString()}`, 'Portfolio Value']}
                          labelFormatter={(label) => label}
                          contentStyle={{ backgroundColor: '#1C180D', border: '1px solid #333' }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#CBFF00"
                          fillOpacity={1}
                          fill="url(#colorValue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-zinc-400 mt-4">
                    This projection is based on historical market data and assumes no additional contributions.
                    Past performance does not guarantee future results.
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setStep('portfolio')}
                    className="flex-1 border border-zinc-800 hover:border-zinc-700 text-white rounded-lg px-4 py-3 font-medium"
                  >
                    Back to Portfolio
                  </button>
                  <button
                    onClick={() => {
                      setPortfolio(null)
                      setIsGenerating(false)
                      setStep('portfolio')
                    }}
                    className="flex-1 bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-lg px-4 py-3 font-medium"
                  >
                    Generate Another Portfolio
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
