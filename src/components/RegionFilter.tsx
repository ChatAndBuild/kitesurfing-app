import { useState } from 'react';
import { Region } from '../types';
import { getAvailableRegions } from '../data/spots';
import { motion } from 'framer-motion';
import { Globe, Filter, X } from 'lucide-react';

interface RegionFilterProps {
  selectedRegions: Region[];
  onRegionChange: (regions: Region[]) => void;
}

export const RegionFilter: React.FC<RegionFilterProps> = ({ 
  selectedRegions, 
  onRegionChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const availableRegions = getAvailableRegions();

  const toggleRegion = (region: Region) => {
    if (selectedRegions.includes(region)) {
      onRegionChange(selectedRegions.filter(r => r !== region));
    } else {
      onRegionChange([...selectedRegions, region]);
    }
  };

  const clearFilters = () => {
    onRegionChange([]);
  };

  const selectAllRegions = () => {
    onRegionChange(availableRegions as Region[]);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
      >
        <Filter size={18} className="text-blue-500" />
        <span className="font-medium">
          {selectedRegions.length === 0 
            ? 'Filter by Region' 
            : `${selectedRegions.length} Region${selectedRegions.length > 1 ? 's' : ''} Selected`}
        </span>
        {selectedRegions.length > 0 && (
          <span className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs">
            {selectedRegions.length}
          </span>
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10 p-4"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-700 flex items-center gap-2">
              <Globe size={16} />
              <span>Filter by Region</span>
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {availableRegions.map(region => (
              <div key={region} className="flex items-center">
                <label className="flex items-center space-x-2 cursor-pointer w-full py-1">
                  <input
                    type="checkbox"
                    checked={selectedRegions.includes(region as Region)}
                    onChange={() => toggleRegion(region as Region)}
                    className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{region}</span>
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4 pt-3 border-t border-gray-100">
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear All
            </button>
            <button
              onClick={selectAllRegions}
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              Select All
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
