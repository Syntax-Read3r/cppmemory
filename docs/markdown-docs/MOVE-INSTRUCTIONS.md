# Moving Documentation to Separate Docs Repository

Instructions for properly moving the `markdown-docs` folder to a separate documentation repository.

## 📁 What Was Created

The following documentation structure was created in `markdown-docs/`:

```
markdown-docs/
├── README.md                           # Main documentation index
├── data-repository/                    # Data structure documentation
│   ├── overview.md                    # Architecture and design decisions
│   ├── schema.md                      # TypeScript interfaces reference
│   ├── chapter-structure.md           # Chapter organization guide
│   └── question-format.md             # Question writing guidelines
├── guides/                            # Step-by-step guides
│   ├── adding-new-chapter.md          # How to add new content
│   ├── migration-guide.md             # Legacy data migration
│   ├── content-creation.md            # Content creation best practices
│   └── deployment.md                  # Deployment procedures
└── troubleshooting/                   # Issue resolution
    ├── build-errors.md                # Build and compilation issues
    ├── data-validation.md             # Data integrity problems
    └── performance.md                 # Performance optimization
```

## 🚀 Move Instructions

### Step 1: Create/Navigate to Your Docs Repository

```bash
# If creating new repository
git init cppmemory-docs
cd cppmemory-docs

# If using existing repository
cd /path/to/your/docs/repo
```

### Step 2: Copy Documentation Files

```bash
# From the cppmemory project root
cp -r markdown-docs/* /path/to/your/docs/repo/

# Or if in the docs repo already
cp -r /path/to/cppmemory/markdown-docs/* .
```

### Step 3: Clean Up Source Repository

```bash
# In the cppmemory project
rm -rf markdown-docs/

# Add to .gitignore to prevent recreation
echo "markdown-docs/" >> .gitignore
```

### Step 4: Initialize Docs Repository

```bash
# In your docs repository
git add .
git commit -m "Initial documentation structure for CppMemory project

- Add data repository architecture documentation
- Add step-by-step guides for content creation
- Add troubleshooting guides for common issues
- Complete migration from monolithic to modular data structure"

# Push to remote (if using GitHub)
git remote add origin https://github.com/yourusername/cppmemory-docs.git
git push -u origin main
```

## 📝 Recommended Repository Structure

### Option 1: Flatten Structure (Recommended)
```
cppmemory-docs/
├── README.md                      # Main index
├── data-architecture.md           # data-repository/overview.md
├── data-schema.md                 # data-repository/schema.md
├── question-format.md             # data-repository/question-format.md
├── adding-chapters.md             # guides/adding-new-chapter.md
├── migration-guide.md             # guides/migration-guide.md
├── troubleshooting-build.md       # troubleshooting/build-errors.md
├── troubleshooting-data.md        # troubleshooting/data-validation.md
└── deployment.md                  # guides/deployment.md
```

### Option 2: Keep Current Structure
```
cppmemory-docs/
├── README.md
├── data-repository/
├── guides/
└── troubleshooting/
```

## 🔗 Update Cross-References

### In Main CppMemory Repository

Update the main README.md to link to the docs repository:

```markdown
## 📚 Documentation

Comprehensive documentation is available in the separate docs repository:
**[CppMemory Documentation](https://github.com/yourusername/cppmemory-docs)**

### Quick Links
- [Data Architecture](https://github.com/yourusername/cppmemory-docs/blob/main/data-architecture.md)
- [Adding New Chapters](https://github.com/yourusername/cppmemory-docs/blob/main/adding-chapters.md)
- [Migration Guide](https://github.com/yourusername/cppmemory-docs/blob/main/migration-guide.md)
- [Troubleshooting](https://github.com/yourusername/cppmemory-docs/blob/main/troubleshooting-build.md)
```

### In Docs Repository

Update the main README.md to reference the source repository:

```markdown
# CppMemory Documentation

Documentation for the [CppMemory](https://github.com/Syntax-Read3r/cppmemory) interactive C++ learning platform.

**Live Application**: [https://syntax-read3r.github.io/cppmemory/](https://syntax-read3r.github.io/cppmemory/)
**Source Code**: [https://github.com/Syntax-Read3r/cppmemory](https://github.com/Syntax-Read3r/cppmemory)
```

## 🔄 Update Internal Links

### Fix Relative Links in Documentation

Since files may move, update internal links:

```markdown
<!-- Instead of relative paths -->
[Migration Guide](guides/migration-guide.md)

<!-- Use absolute paths or direct references -->
[Migration Guide](migration-guide.md)
```

### Update Repository References

In all documentation files, update references:

```markdown
<!-- Update file paths -->
src/data/quizzes.ts → [View in Source](https://github.com/Syntax-Read3r/cppmemory/blob/main/src/data/index.ts)

<!-- Add direct links to source -->
See the [chapter template](https://github.com/Syntax-Read3r/cppmemory/blob/main/src/data/chapter-template.ts) for reference.
```

## 📋 Final Checklist

### Before Moving
- [ ] Documentation is complete and tested
- [ ] All internal links work correctly
- [ ] Code examples are verified
- [ ] Screenshots/diagrams are included if needed

### After Moving
- [ ] Docs repository is properly initialized
- [ ] All files copied successfully
- [ ] Git history preserved (if needed)
- [ ] Cross-references updated
- [ ] Team notified of new documentation location

### Integration
- [ ] Main repository README updated with docs links
- [ ] Development workflow documentation updated
- [ ] CI/CD references updated if applicable
- [ ] Project documentation in both repos synchronized

## 🛠️ Maintenance

### Keeping Documentation In Sync

```bash
# Create a simple sync script
#!/bin/bash
# sync-docs.sh

SOURCE_REPO="/path/to/cppmemory"
DOCS_REPO="/path/to/cppmemory-docs"

# Check for changes in source data structure
if [ -f "$SOURCE_REPO/src/data/types.ts" ]; then
    echo "Checking for data structure changes..."
    # Add logic to detect schema changes
fi

echo "Documentation sync complete"
```

### Regular Updates

- Review docs quarterly for accuracy
- Update examples when code changes
- Sync with main repository releases
- Validate all external links

## 📞 Support

If you encounter issues during the move:

1. **Check file permissions**: Ensure all files copied correctly
2. **Verify git status**: Make sure nothing was lost
3. **Test documentation**: Browse through all files to ensure completeness
4. **Update bookmarks**: Change any personal/team bookmarks to new location

---

*This separation allows for independent versioning and management of documentation while maintaining clear connections to the source code.*