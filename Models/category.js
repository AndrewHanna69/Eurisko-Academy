let categories = [];

function addCategory(categoryName) {
    const existingCategory = categories.find(category => category.name === categoryName);
    if (existingCategory) {
        return { error: 'Category already exists' };
    }

    const newCategory = {
        id: categories.length + 1, 
        name: categoryName,
        description: categoryDescription,
        createdAt: categoryCreatedAt,
        updatedAt: categoryUpdatedAt,
    };

    categories.push(newCategory);

    return newCategory;
}

module.exports = { addCategory };