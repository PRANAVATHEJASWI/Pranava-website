import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Pranava Thejaswi N M',
  description: `Versatile programmer pursuing a Bachelors in Engineering, skilled in programming, data structures, and web development. Demonstrates a keen interest in Artificial Intelligence, Machine Learning, and Robotics. Proven leadership skills through organizing and coordinating national-level hackathons and workshops.`,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="px-6 py-4">{children}</main>
      </body> 
    </html>
  );
}
