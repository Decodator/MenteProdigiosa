import React from "react";

interface ProgressBarProps {
  totalSections: number;
  currentSection: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSections,
  currentSection,
}) => {
  // Calculate the width percentage for each section
  const sectionWidth = 100 / totalSections;

  return (
    <div style={styles.progressBarContainer}>
      {[...Array(totalSections)].map((_, index) => (
        <div
          key={index}
          style={{
            ...styles.section,
            width: `${sectionWidth}%`,
            backgroundColor: index < currentSection ? "#4caf50" : "#e0e0e0",
          }}
        />
      ))}
    </div>
  );
};

// Styles for the progress bar and sections
const styles = {
  progressBarContainer: {
    display: "flex",
    height: "10px",
    overflow: "hidden",
    gap: 12,
    padding: 20,
  },
  section: {
    height: "100%",
    borderRadius: "5",
    transition: "background-color 0.3s ease",
  },
};

export default ProgressBar;
