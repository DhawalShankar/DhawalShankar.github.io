export default function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/dhawalshankar',
      icon: 'fab fa-github',
      hoverColor: 'hover:text-emerald-400'
    },
    {
      href: 'https://linkedin.com/in/dhawalshankar',
      icon: 'fab fa-linkedin',
      hoverColor: 'hover:text-blue-400'
    },
    {
      href: 'https://leetcode.com/dhawalshankar',
      icon: 'fas fa-code',
      hoverColor: 'hover:text-amber-400'
    },
    {
      href: 'https://dhawalshankar.github.io',
      icon: 'fas fa-globe',
      hoverColor: 'hover:text-violet-400'
    }
  ];

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-primary-300">&copy; 2024 Dhawal Shukla. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-primary-300 ${link.hoverColor} transition-colors text-xl`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
