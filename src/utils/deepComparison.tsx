type Difference<T> = {
    old: T;
    new: T;
};

type DiffResult = {
    [key: string]: Difference<unknown> | DiffResult;
};

const isObject = (value: unknown): value is object => 
    value !== null && typeof value === 'object' && !Array.isArray(value);

export const getObjectDiff = <T extends object>(obj1: T, obj2: T): DiffResult => {
    // Early exit for identical objects
    if (obj1 === obj2) return {};
    
    const diff: DiffResult = {};
    const keys = Object.keys(obj1);
    
    for (const key of keys) {
        const value1 = obj1[key as keyof T];
        const value2 = obj2[key as keyof T];
        
        // Early continue if values are identical
        if (value1 === value2) continue;

        if (isObject(value1) && isObject(value2)) {
            const nestedDiff = getObjectDiff(value1, value2);
            if (Object.keys(nestedDiff).length > 0) {
                diff[key] = nestedDiff;
            }
        } else {
            diff[key] = {
                old: value1,
                new: value2
            };
        }
    }

    return diff;
};