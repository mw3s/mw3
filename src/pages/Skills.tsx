
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  // Define skill categories
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", "Python", 
        "Ruby", "SQL", "PHP", "Swift", "Objective-C", 
        "C#", "C++", "Kotlin"
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        "React", "React Native", "SwiftUI", "JSX", "TSX"
      ]
    },
    {
      name: "Security Tools",
      skills: [
        "Penetration Testing", "Reverse Engineering", "Exploit Development", 
        "iOS Jailbreaking", "Static Analysis"
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="page-transition flex flex-col items-center justify-center flex-1 py-8">
        <div className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
          loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Skills & Expertise</h1>
          
          <div className="grid grid-cols-1 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-lg"
              >
                <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="skill-tag group"
                    >
                      <span className="group-hover:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Code visualization */}
          <div className="mt-12 bg-card rounded-xl p-6 shadow-lg overflow-hidden">
            <h2 className="text-xl font-semibold mb-4">My Development Process</h2>
            
            <div className="relative">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto text-sm sm:text-base font-mono">
                <code className="language-javascript">
{`// mw3s development approach
function developSecureSolution(requirements) {
  // Analyze the security requirements
  const securityModel = analyzeSecurityNeeds(requirements);
  
  // Design the architecture with security in mind
  const architecture = designSecureArchitecture(securityModel);
  
  // Implement with best practices
  const implementation = buildWithSecurityBestPractices(architecture);
  
  // Rigorous testing including penetration tests
  const securityIssues = performPenetrationTesting(implementation);
  
  // Fix any vulnerabilities found
  const secureProduct = patchVulnerabilities(implementation, securityIssues);
  
  // Continuous monitoring and updates
  deployWithMonitoring(secureProduct);
  
  return secureProduct;
}`}
                </code>
              </pre>
              
              {/* Animation overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-card/80"></div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Interested in my work? <a href="/social" className="text-primary hover:underline">Connect with me</a> to discuss potential collaborations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
