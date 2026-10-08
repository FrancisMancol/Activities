import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';

// Midnight Orbit theme: Static Study Dashboard — only React and React Native are required.
const subjects = [
  { mark: 'UI', title: 'Mobile Development', detail: 'Interface design • Module 04', time: '10:30 AM', color: '#30264D', ink: '#C4ADFF' },
  { mark: 'DB', title: 'Database Systems', detail: 'Relationships • Module 06', time: '1:00 PM', color: '#203B49', ink: '#86D7ED' },
];

function SectionTitle({ title, aside }) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionAside}>{aside}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#10111B" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <View style={styles.header}>
            <View>
              <Text style={styles.brand}>ORBIT / STUDY</Text>
              <Text style={styles.greeting}>Hey, Francis Kiko <Text style={styles.wave}>✦</Text></Text>
              <Text style={styles.subtitle}>A little progress, every day.</Text>
            </View>
            <View style={styles.avatar} accessibilityLabel="Francis Kiko's profile initials">
              <Text style={styles.avatarText}>AL</Text>
              <View style={styles.online} />
            </View>
          </View>

          <View style={styles.hero}>
            <View style={styles.heroTop}>
              <Text style={styles.eyebrow}>YOUR WEEKLY MISSION</Text>
              <View style={styles.badge}><Text style={styles.badgeText}>On track ↗</Text></View>
            </View>
            <Text style={styles.heroTitle}>Aim a little higher.</Text>
            <Text style={styles.heroDescription}>You're building something great,{ '\n' }one study session at a time.</Text>
            <View style={styles.progressHeading}>
              <Text style={styles.progressValue}>12 <Text style={styles.progressTotal}>/ 16 hours</Text></Text>
              <Text style={styles.percentage}>75%</Text>
            </View>
            <View style={styles.progressTrack} accessibilityLabel="Weekly study goal: 75 percent complete">
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.heroFootnote}>Just 4 more hours to reach your goal</Text>
          </View>

          <View style={styles.stats}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>STUDY STREAK</Text>
              <Text style={styles.statNumber}>07 <Text style={styles.statUnit}>days</Text></Text>
              <Text style={styles.statNote}>You're showing up!</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>TASKS FINISHED</Text>
              <Text style={styles.statNumber}>24 <Text style={styles.statUnit}>tasks</Text></Text>
              <Text style={styles.statNote}>This month so far</Text>
            </View>
          </View>

          <SectionTitle title="Today's classes" aside="MON, SEP 28" />
          <View style={styles.classList}>
            {subjects.map((subject, index) => (
              <View key={subject.mark} style={[styles.classRow, index > 0 && styles.classBorder]}>
                <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
                  <Text style={[styles.subjectMark, { color: subject.ink }]}>{subject.mark}</Text>
                </View>
                <View style={styles.classCopy}>
                  <Text style={styles.classTitle}>{subject.title}</Text>
                  <Text style={styles.classDetail}>{subject.detail}</Text>
                  <Text style={styles.classTime}>{subject.time}</Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </View>
            ))}
          </View>

          <SectionTitle title="Up next" aside="01 TASK" />
          <View style={styles.taskCard}>
            <View style={styles.taskTop}>
              <View style={styles.dueBadge}><Text style={styles.dueText}>DUE TODAY</Text></View>
              <Text style={styles.taskCategory}>Mobile Development</Text>
            </View>
            <Text style={styles.taskTitle}>Build a static app UI</Text>
            <Text style={styles.taskDescription}>Turn your ideas into a single, thoughtfully{ '\n' }designed screen.</Text>
            <View style={styles.taskFooter}>
              <Text style={styles.taskMeta}>Activity 02</Text>
              <Text style={styles.taskMeta}>11:59 PM</Text>
            </View>
          </View>
          <Text style={styles.quote}>Your next discovery starts here.</Text>
        </View>
      </ScrollView>

      {/* Decorative navigation: this assignment is a static single-page UI. */}
      <View style={styles.navWrap}>
        <View style={styles.nav}>
          {[
            { icon: '▦', label: 'Overview', selected: true },
            { icon: '▤', label: 'Courses' },
            { icon: '✓', label: 'Tasks' },
            { icon: '◷', label: 'Schedule' },
          ].map((item) => (
            <View key={item.label} style={styles.navItem}>
              <View style={[styles.navIconBox, item.selected && styles.navSelected]}>
                <Text style={[styles.navIcon, item.selected && styles.navActiveText]}>{item.icon}</Text>
              </View>
              <Text style={[styles.navLabel, item.selected && styles.navActiveText]}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#10111B' },
  scroll: { flexGrow: 1, paddingTop: 56, paddingBottom: 20, paddingHorizontal: 22 },
  page: { width: '100%', maxWidth: 560, alignSelf: 'center' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 },
  brand: { fontSize: 10, fontWeight: '800', letterSpacing: 2.5, color: '#B5A0FA', marginBottom: 12 },
  greeting: { fontSize: 30, fontWeight: '800', letterSpacing: -1, color: '#F5F1FF' },
  wave: { color: '#C4ADFF' },
  subtitle: { fontSize: 13, color: '#A5A6BE', marginTop: 6 },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#30264D', alignItems: 'center', justifyContent: 'center', marginLeft: 10 },
  avatarText: { color: '#D8CAFF', fontSize: 16, fontWeight: '700' },
  online: { position: 'absolute', bottom: 0, right: 0, width: 13, height: 13, borderRadius: 7, backgroundColor: '#8DE0D0', borderWidth: 3, borderColor: '#10111B' },
  hero: { backgroundColor: '#33265B', padding: 23, borderRadius: 25 },
  heroTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 },
  eyebrow: { fontSize: 10, letterSpacing: 1.5, color: '#CEBFF7', fontWeight: '700' },
  badge: { backgroundColor: '#4B3978', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6 },
  badgeText: { fontSize: 10, fontWeight: '600', color: '#E0D4FF' },
  heroTitle: { fontSize: 25, fontWeight: '700', letterSpacing: -0.7, color: '#FFFFFF', marginTop: 22 },
  heroDescription: { color: '#D1C5E9', fontSize: 13, lineHeight: 21, marginTop: 9 },
  progressHeading: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 25, marginBottom: 10 },
  progressValue: { color: '#FFFFFF', fontSize: 27, fontWeight: '700' },
  progressTotal: { fontSize: 13, color: '#D1C5E9', fontWeight: '400' },
  percentage: { color: '#C8AAFF', fontSize: 13, fontWeight: '700' },
  progressTrack: { height: 7, backgroundColor: '#594679', borderRadius: 5, overflow: 'hidden' },
  progressFill: { width: '75%', height: '100%', borderRadius: 5, backgroundColor: '#C8AAFF' },
  heroFootnote: { fontSize: 11, color: '#D1C5E9', marginTop: 12 },
  stats: { flexDirection: 'row', gap: 12, marginTop: 16 },
  statCard: { flex: 1, backgroundColor: '#1B1C2C', borderWidth: 1, borderColor: '#2C2D40', borderRadius: 19, padding: 17 },
  statLabel: { color: '#ABA7C3', fontSize: 9, letterSpacing: 1, fontWeight: '700' },
  statNumber: { fontSize: 29, fontWeight: '700', color: '#F2EDFF', marginTop: 10 },
  statUnit: { fontSize: 12, color: '#A7A4BB', fontWeight: '400' },
  statNote: { color: '#A7A4BB', fontSize: 10, marginTop: 6 },
  sectionHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 29, marginBottom: 15, gap: 10 },
  sectionTitle: { color: '#F2EDFF', fontSize: 19, fontWeight: '700', letterSpacing: -0.4 },
  sectionAside: { color: '#A6A3BD', fontSize: 9, letterSpacing: 1, fontWeight: '600' },
  classList: { backgroundColor: '#1B1C2C', borderRadius: 20, borderWidth: 1, borderColor: '#2C2D40', paddingHorizontal: 17 },
  classRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18 },
  classBorder: { borderTopWidth: 1, borderTopColor: '#2C2D40' },
  subjectIcon: { width: 45, height: 49, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  subjectMark: { fontSize: 14, fontWeight: '800' },
  classCopy: { flex: 1, marginLeft: 13 },
  classTitle: { color: '#EAE5FA', fontSize: 13, fontWeight: '700' },
  classDetail: { color: '#ABA7C3', fontSize: 10, marginTop: 5 },
  classTime: { color: '#BDA4F7', fontSize: 10, fontWeight: '700', marginTop: 8 },
  chevron: { color: '#A6A3BD', fontSize: 25, marginLeft: 7 },
  taskCard: { backgroundColor: '#222039', borderRadius: 20, padding: 20 },
  taskTop: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 9 },
  dueBadge: { backgroundColor: '#463444', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 5 },
  dueText: { color: '#FFC3AA', fontSize: 8, letterSpacing: 0.8, fontWeight: '800' },
  taskCategory: { color: '#B8AEC9', fontSize: 10 },
  taskTitle: { color: '#F2EDFF', fontSize: 18, fontWeight: '700', marginTop: 16 },
  taskDescription: { color: '#B8AEC9', fontSize: 12, lineHeight: 19, marginTop: 7 },
  taskFooter: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#3B3551', paddingTop: 13, marginTop: 17 },
  taskMeta: { color: '#B8AEC9', fontSize: 10, fontWeight: '600' },
  quote: { color: '#A6A3BD', fontSize: 11, textAlign: 'center', marginTop: 24 },
  navWrap: { backgroundColor: '#1B1C2C', borderTopWidth: 1, borderTopColor: '#2C2D40', paddingBottom: 28, paddingTop: 10 },
  nav: { flexDirection: 'row', maxWidth: 560, width: '100%', alignSelf: 'center' },
  navItem: { flex: 1, alignItems: 'center' },
  navIconBox: { width: 48, height: 28, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  navSelected: { backgroundColor: '#392B57' },
  navIcon: { color: '#ABA7C3', fontSize: 21 },
  navLabel: { color: '#ABA7C3', fontSize: 9, marginTop: 5, fontWeight: '600' },
  navActiveText: { color: '#D0BAFF' },
});

