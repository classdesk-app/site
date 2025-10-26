"use client"

import { motion } from "framer-motion"
import {
  Award,
  Calendar,
  BarChart3,
  Shield,
} from "lucide-react"

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stop Drowning in Paperwork. Start Leading with Data.
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Say goodbye to manual attendance registers, scattered Excel sheets, and endless report compilation. 
            Classdesk streamlines your daily college operations—so you can focus on what matters: education excellence.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          {/* Attendance Management - Spans 2 columns */}
          <motion.div
            className="lg:col-span-2 grid grid-rows-[1fr_auto] gap-y-4 overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative -m-6 p-6 border-x border-white/5 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
              <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              <div className="relative flex items-center justify-center py-8 gap-3">
                <div className="relative mx-auto bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100/50 dark:border-white/5 shadow-sm w-full max-w-[180px]">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] text-gray-700 dark:text-white/80 font-medium">Today</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="h-1 w-14 rounded bg-gray-300 dark:bg-white/10" />
                      </div>
                      <span className="text-[10px] text-green-400 font-medium">P</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="h-1 w-16 rounded bg-gray-300 dark:bg-white/10" />
                      </div>
                      <span className="text-[10px] text-green-400 font-medium">P</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-red-400/20 flex items-center justify-center">
                          <svg className="w-2 h-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="h-1 w-12 rounded bg-gray-300 dark:bg-white/10" />
                      </div>
                      <span className="text-[10px] text-red-400 font-medium">A</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="h-1 w-16 rounded bg-gray-300 dark:bg-white/10" />
                      </div>
                      <span className="text-[10px] text-green-400 font-medium">P</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-red-400/20 flex items-center justify-center">
                          <svg className="w-2 h-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="h-1 w-12 rounded bg-gray-300 dark:bg-white/10" />
                      </div>
                      <span className="text-[10px] text-red-400 font-medium">A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Attendance Management</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">No more manual registers or calculation errors. One-click attendance tracking with automated reports and analytics. Save hours of administrative work daily.</p>
            </div>
          </motion.div>

          {/* Marksheet Generation - Spans 2 columns */}
          <motion.div
            className="lg:col-span-2 grid grid-rows-[1fr_auto] gap-y-4 overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative -m-6 p-6 border-x border-white/5 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
              <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              <div className="relative flex items-center justify-center py-8 min-h-[200px]">
                {/* Main card */}
                <div className="relative mx-auto z-20 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100/50 dark:border-white/5 shadow-sm w-full max-w-[180px]">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-purple-400" />
                    <span className="text-[10px] text-gray-700 dark:text-white/80 font-medium">Student Report</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded bg-green-400/10 border-l-2 border-green-400">
                      <span className="text-[10px] text-gray-700 dark:text-white/70">Math</span>
                      <span className="text-xs font-bold text-green-400">A+</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-blue-400/10 border-l-2 border-blue-400">
                      <span className="text-[10px] text-gray-700 dark:text-white/70">Science</span>
                      <span className="text-xs font-bold text-blue-400">A</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-cyan-400/10 border-l-2 border-cyan-400">
                      <span className="text-[10px] text-gray-700 dark:text-white/70">History</span>
                      <span className="text-xs font-bold text-cyan-400">B+</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-gray-600 dark:text-white/50">Overall GPA</span>
                    <span className="text-sm font-bold text-purple-400">3.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Grade Management System</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">Auto-calculate grades, detect errors instantly, and generate professional marksheets for thousands of students with zero manual work.</p>
            </div>
          </motion.div>

          {/* Session Planning - Spans 2 columns */}
          <motion.div
            className="lg:col-span-2 grid grid-rows-[1fr_auto] gap-y-4 overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative -m-6 p-6 border-x border-white/5 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
              <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              <div className="relative flex items-center justify-center py-8 min-h-[200px]">
                {/* Main card */}
                <div className="relative mx-auto z-20 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100/50 dark:border-white/5 shadow-sm w-full max-w-[200px]">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-blue-400" />
                    <span className="text-xs text-gray-700 dark:text-white/80 font-medium">Weekly Schedule</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded bg-blue-400/10 border-l-2 border-blue-400">
                      <div className="space-y-0.5">
                        <div className="text-[10px] text-blue-400 font-medium">09:00 AM</div>
                        <div className="h-1 w-16 rounded bg-gray-300 dark:bg-white/20" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-cyan-400/10 border-l-2 border-cyan-400">
                      <div className="space-y-0.5">
                        <div className="text-[10px] text-cyan-400 font-medium">11:00 AM</div>
                        <div className="h-1 w-14 rounded bg-gray-300 dark:bg-white/20" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-emerald-400/10 border-l-2 border-emerald-400">
                      <div className="space-y-0.5">
                        <div className="text-[10px] text-emerald-400 font-medium">02:00 PM</div>
                        <div className="h-1 w-18 rounded bg-gray-300 dark:bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timetable Scheduling</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">Smart conflict detection, automatic room allocation, and faculty coordination. Plan entire semesters in hours, not weeks.</p>
            </div>
          </motion.div>

          {/* Analytics & Insights - Spans 3 columns on large screens */}
          <motion.div
            className="lg:col-span-3 grid grid-rows-[1fr_auto] gap-y-4 rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative -m-6 p-6 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
              <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              <div className="relative flex items-center justify-center py-6 min-h-[180px]">
                {/* Main card */}
                <div className="relative mx-auto z-20 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100/50 dark:border-white/5 shadow-sm w-full max-w-xs">
                  <div className="flex items-center justify-between mb-4">
                    <BarChart3 className="h-5 w-5 text-emerald-400" />
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">94.5%</div>
                      <div className="text-[10px] text-gray-600 dark:text-white/60">Avg Attendance</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 to-green-400" />
                      </div>
                      <span className="text-[10px] text-gray-600 dark:text-white/60 w-10">75%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                      </div>
                      <span className="text-[10px] text-gray-600 dark:text-white/60 w-10">80%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      </div>
                      <span className="text-[10px] text-gray-600 dark:text-white/60 w-10">65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analytics & Reporting</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">Real-time dashboards show exactly what&apos;s working and what&apos;s not. Identify at-risk students early, track performance trends, and make informed decisions to improve outcomes.</p>
            </div>
          </motion.div>

          {/* Role Management - Spans 3 columns on large screens */}
          <motion.div
            className="lg:col-span-3 grid grid-rows-[1fr_auto] gap-y-4 overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative -m-6 p-6 border-x border-white/5 bg-gradient-to-b from-transparent via-gray-500/5 to-transparent">
              <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              <div className="relative flex items-center justify-center py-8">
                {/* Main Roles Card */}
                <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-100/50 dark:border-white/5 shadow-sm max-w-xs w-full">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Shield className="h-3 w-3 text-gray-400" />
                    <span className="text-[10px] text-gray-800 dark:text-white/90 font-semibold">Access Control Matrix</span>
                  </div>

                  <div className="space-y-1.5">
                    {/* Admin Role */}
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-green-500/10 border border-green-500/10">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 rounded bg-green-500/20">
                          <Shield className="h-2.5 w-2.5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-800 dark:text-white/90 font-medium">Administrator</p>
                          <p className="text-[8px] text-gray-600 dark:text-white/60">Full Access</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-3 h-3 rounded bg-green-400/40 flex items-center justify-center">
                          <svg className="w-2 h-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="w-3 h-3 rounded bg-green-400/40 flex items-center justify-center">
                          <svg className="w-2 h-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="w-3 h-3 rounded bg-green-400/40 flex items-center justify-center">
                          <svg className="w-2 h-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Faculty Role */}
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/10">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 rounded bg-blue-500/20">
                          <Shield className="h-2.5 w-2.5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-800 dark:text-white/90 font-medium">Faculty</p>
                          <p className="text-[8px] text-gray-600 dark:text-white/60">Limited Access</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-3 h-3 rounded bg-blue-400/40 flex items-center justify-center">
                          <svg className="w-2 h-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="w-3 h-3 rounded bg-blue-400/40 flex items-center justify-center">
                          <svg className="w-2 h-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="w-3 h-3 rounded bg-gray-300 dark:bg-white/10" />
                      </div>
                    </div>

                    {/* Student Role */}
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/10">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 rounded bg-purple-500/20">
                          <Shield className="h-2.5 w-2.5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-800 dark:text-white/90 font-medium">Student</p>
                          <p className="text-[8px] text-gray-600 dark:text-white/60">View Only</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-3 h-3 rounded bg-purple-400/40 flex items-center justify-center">
                          <svg className="w-2 h-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="w-3 h-3 rounded bg-gray-300 dark:bg-white/10" />
                        <div className="w-3 h-3 rounded bg-gray-300 dark:bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Access Control Management</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">Control who sees what with role-based permissions. Protect sensitive student data while giving everyone the access they need.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
