import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { logEvent } from "../analytics";

const username = "sergethi";

function LatestRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
        );
        const data = await res.json();

        // Fetch languages for each repo
        const reposWithLangs = await Promise.all(
          data.map(async (repo) => {
            const langRes = await fetch(repo.languages_url);
            const langData = await langRes.json();

            // Calculate percentages
            const total = Object.values(langData).reduce((sum, val) => sum + val, 0);
            const langPercentages = Object.entries(langData).map(([lang, bytes]) => ({
              lang,
              percent: ((bytes / total) * 100).toFixed(1), // 1 decimal place
            }));

            return {
              ...repo,
              languages: langPercentages,
            };
          })
        );

        setRepos(reposWithLangs);
      } catch (error) {
        console.error("Error fetching repos or languages", error);
      }
    }

    fetchRepos();
  }, []);

  const handleRepoClick = (name) => {
    logEvent("LatestRepos", "Click", name);
  };

  return (
    <>
      {/* <div className="projects_container"> */}
        {repos.map((repo) => (
          <div key={repo.id} className="project">
            <div className="image repo-card">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleRepoClick(repo.name)}
                className="proj-img-flex"
              >
                {/* <img src={repo.owner.avatar_url} alt={repo.name} /> */}
                <span className="repo-name">{repo.name}</span>
              </a>
            </div>

            {/* <div className="title">
              {repo.language || "GitHub"}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div> */}

            {repo.description && (
              <p className="repo-desc">{repo.description}</p>
            )}

            {repo.languages?.length > 0 && (
              <div className="language-usage">
                {repo.languages.map((lang) => (
                  <span key={lang.lang} className="lang-badge">
                    {lang.lang}: {lang.percent}%
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      {/* </div> */}
    </>
  );
}

export default LatestRepos;
