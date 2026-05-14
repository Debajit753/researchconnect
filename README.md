# ResearchConnect 🎓🔬

ResearchConnect is a premium, high-performance web application designed to bridge the gap between aspiring students and world-class researchers across India's premier engineering institutes (IITs, NITs, BITS).

![ResearchConnect Preview](https://raw.githubusercontent.com/Debajit753/researchconnect/main/src/assets/hero.png)

## 🚀 Key Features

- **Advanced Search**: Instant keyword matching across researcher names, departments, and specific interests.
- **Dynamic Filtering**: Filter by institution type (IIT, NIT, BITS) and specific institutes.
- **Cloud-Synced Data**: Real-time integration with Supabase for the most up-to-date professor profiles.
- **Premium UI**: Modern dark-mode experience with glassmorphism, fluid animations (Framer Motion), and responsive design.
- **Direct Connect**: Quick access to official profile links and contact information.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS (v4)
- **Database**: Supabase (PostgreSQL)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Cleanup**: Python (Custom scraping & transformation pipeline)

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Debajit753/researchconnect.git
   cd researchconnect
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Launch Development Server**:
   ```bash
   npm run dev
   ```

## 🧹 Data Pipeline

The project includes a Python-based pipeline for data management:
- `clean_faculty_data.py`: Strips noise from scraped CSV data and formats research tags into Postgres arrays.
- `push_to_supabase.py`: Handles bulk upserting and clearing of the Supabase database.

## 📄 License

MIT License. See [LICENSE](LICENSE) for more details.

---
Built with ❤️ for the Indian Research Community.
