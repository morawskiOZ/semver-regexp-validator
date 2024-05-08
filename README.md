# Semver regexp validator action
Forked from [rubenesp87/semver-validation-action](https://github.com/rubenesp87/semver-validation-action)

Adjusted logic using official Regex from [semver docs](https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string) for tag validation.

## Inputs

### `version`

**Required** Version to validate.

## Example usage

```yaml
uses: morawskiOZ/semver-regexp-validator@v1.0.6
with:
  version: ${{ github.event.release.tag_name }}
```

```yaml
uses: morawskiOZ/semver-regexp-validator@v1.0.6
with:
  version: 'v0.7.9'
```

```yaml
uses: morawskiOZ/semver-regexp-validator@v1.0.6
with:
  version: '0.7.9-beta.1'
```
