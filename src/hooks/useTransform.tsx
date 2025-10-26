const useTransform = (text: string) => {
    return text ? text.replace(/([A-Z0-9]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1').trim() : '';
};

export default useTransform;
